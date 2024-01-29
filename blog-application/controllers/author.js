const router = require('express').Router()
const sequelize = require('sequelize')

const { Blog } = require('../models')

router.get('/', async (req, res)=> {
    const authors = await Blog.findAll({
        group: 'author',
        attributes: [
            'author',
            [sequelize.fn('count', sequelize.col('author')),'articles'],
            [sequelize.fn('sum', sequelize.col('likes')), 'likes']
        ],
        order:[['likes', 'DESC']]
    })
    res.json(authors)
})

module.exports = router
