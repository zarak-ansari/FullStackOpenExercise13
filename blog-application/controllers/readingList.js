const { Reading_List } = require('../models')

const router = require('express').Router()

router.post('/', async (req, res) => {

    const readingListItem = await Reading_List.create(req.body)
    
    res.json(readingListItem)
})

module.exports = router