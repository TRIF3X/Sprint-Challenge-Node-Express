const express = require('express')
const actDb = require('../data/helpers/actionModel.js')
const router = express.Router();

router.get('/:id', (req, res) => {
    const { id } = req.params
    actDb.get(id)
        .then(action => {
            res.status(200).json(action)
        })
        .catch(err => {
            res.status(500).json({ message: 'The action ID can not be found'})
        })
})


module.exports = router;