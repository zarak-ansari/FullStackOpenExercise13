const jwt = require('jsonwebtoken')
const { SECRET } = require('./config')
const User = require('../models/user')

const userExtractor = async (req, res, next) => {
    const authorization = req.get('authorization')
    if(authorization && authorization.toLowerCase().startsWith('bearer ')){
        try {
            const token = authorization.substring(7)
            const decodedToken = jwt.decode(token, SECRET)
            const user = await User.findByPk(decodedToken.id)
            req.body = {...req.body, userId: user.id}
        } catch {
            return res.status(401).json({error: 'token invalid'})
        }
       
    }

    next()
}

module.exports = { userExtractor }

