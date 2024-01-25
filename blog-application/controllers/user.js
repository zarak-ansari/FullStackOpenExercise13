const router = require('express').Router()

const { User } = require('../models')

router.get('/', async (_, res) => {
    const users = await User.findAll()
    res.json(users) 
})

router.post('/', async (req, res) => {
    try{
        const user = await User.create(req.body)
        res.json(user)
    } catch(error){
        res.status(400).json(error)
    }
})

router.get('/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id)
    if(user){
        res.json(user)
    } else {
        res.status(400).end()
    }
})

module.exports = router