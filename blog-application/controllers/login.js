const router = require('express').Router()
const jwt = require('jsonwebtoken')

const { User } = require('../models')
const { SECRET } = require('../util/config')

router.post('/', async (req, res) => {
    const user = await User.findOne({
        where: {
            username: req.body.username
        }
    })
    
    const isPasswordCorrect = req.body.password === 'secret'

    if(user && isPasswordCorrect){
        const userForToken = {
            username: user.username,
            id: user.id
        }
    
        const token = jwt.sign(userForToken, SECRET)
        
        const response = {
            token,
            username: user.username,
            name:user.name
        }
        res.json(response)
    } else {
        res.send(401).json({
            error:'invalid username or password'
        })
    }

})

module.exports = router