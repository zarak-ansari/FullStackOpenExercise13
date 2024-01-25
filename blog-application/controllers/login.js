const router = require('express').Router()
const jwt = require('jsonwebtoken')

const { User } = require('../models')


router.post('/', async (req, res) => {
    const user = User.findOne({
        where: {
            username: req.body.username
        }
    })

    const isPasswordCorrect = req.body.password === 'secret'

    const userForToken = {
        username: user.username,
        id: user.id
    }

    
})