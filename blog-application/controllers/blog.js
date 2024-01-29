const router = require('express').Router()
const { Op } = require("sequelize");

const { Blog, User } = require('../models')

router.get('/', async(req, res) => {

    const blogs = await Blog.findAll({
        attributes: {exclude:['userId']}, 
        include:{
            model: User
        },
        where:{
            [Op.or]: [
                {
                    title: {
                        [Op.iLike]: req.query.search ? `%${req.query.search}%` : '%%'
                    }
                },
                {
                    author: {
                        [Op.iLike]:req.query.search ? `%${req.query.search}%` : '%%'
                    }
                }
            ]
        },
        order: [['likes', 'DESC']]
    })
    res.json(blogs)
})

router.post('/', async (req, res) => {
    if(req.body.userId){
        const blog = await Blog.create(req.body)
        res.json(blog)
    } else {
        res.status(401).json({message:"user must be logged in"})
    }

})

router.delete('/:id', async (req, res) => {
    if(!req.body.userId) {
        res.status(401).json({message: "user must be logged in"})
    }

    const blog = await Blog.findByPk(req.params.id)
    if(blog.userId === req.body.userId){
        await blog.destroy()
        res.status(200).json(blog)
    } else {
        res.status(403).json({message:"blog can only be deleted by the user who created it"})
    }
})

router.put('/:id', async (req, res) => {
    const blog = await Blog.findByPk(req.params.id)
    blog.likes = req.body.likes
    await blog.save()
    res.json(blog)
})

module.exports = router