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

router.post('/', (req, res) => {
    if(!req.body.name || !req.body.description || req.body.name.length > 128) {
        res.status(400).json({ message: 'Please provide a name and description, or your name is greater than 128 charecters.' })
    } else {
        proDb.insert(req.body)
            .then(project => {
                res.status(201).json(project)
            })
            .catch(err => {
                res.status(500).json({ message: 'project can not be added at this time'})
            })
    }
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    if(!req.body.name || !req.body.description || req.body.name.length > 128) {
        res.status(400).json({ message: 'Please provide a name and description, or your name is greater than 128 charecters.' })
    } else {
        proDb.update(id, req.body) 
            .then(project => {
                res.status(201).json(req.body)
            })
            .catch(err => {
                res.status(500).json({ message: 'project can not be updated at this time'})
            })
    }
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
        proDb.remove(id)
        .then(project => {
            if(project) {
             res.status(200).json({ message: `deleted project with id:${req.params.id}` })
            } else {
             res.status(404).json({ message: `project with id:${req.params.id} does not exist` })
            }
         })
         .catch(err => {
             res.status(500).json({ message: 'Error deleting project from database' })
         })
})

module.exports = router;