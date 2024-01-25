const router = require('express').Router()

const Blog = require('../models/blog')

router.get('/', async(_, res) => {
    const blogs = await Blog.findAll()
    res.json(blogs)
})

router.post('/', async (req, res) => {
    try{
        const blog = await Blog.create(req.body)
        res.json(blog)
    } catch(error) {
        console.log('something went wrong')
        console.log(JSON.stringify(req.body))
    }
})

router.delete('/:id', async (req, res) => {
    const blog = await Blog.findByPk(req.params.id)
    await blog.destroy()
    res.status(200).json(blog)
})

module.exports = router