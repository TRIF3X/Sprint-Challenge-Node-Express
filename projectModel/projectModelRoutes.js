const express = require('express')
const proDb = require('../data/helpers/projectModel.js')
const router = express.Router();

router.get('/:id', (req, res) => {
    const { id } = req.params
    proDb.get(id)
        .then(post => {
            res.status(200).json(post)
        })
        .catch(err => {
            res.status(500).json({ message: 'The post ID can not be found'})
        })
})

router.get('/project/:id', (req,res) => {
    const { id } = req.params
    proDb.getProjectActions(id)
        .then(actions => {
            if(actions.length === 0) {
                res.status(404).json({ message: 'invalid project id' })
            } else {
                res.status(200).json(actions)
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'project actions can not be retrieved.'})
        })
})

module.exports = router;