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

router.post('/', (req, res) => {
    const action = req.body
    if(!req.body.project_id || !req.body.description || !req.body.notes) {
        res.status(400).json({ message: 'Please provide a project id, a description, and notes' })
    } else {
       actDb.insert(action)
        .then(action => {
            res.status(201).json(action)
        })
        .catch(err => {
            res.response(500).json({ message: 'error adding project to db' })
        })
    }
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    if(!req.body.project_id || !req.body.description || !req.body.notes) {
        res.status(400).json({ message: 'Please provide a project id, a description, and notes' })
    } else {
        actDb.update(id, req.body) 
            .then(project => {
                res.status(200).json({ message: 'project has been updated', project })
            })
            .catch(err => {
                res.status(500).json({ message: 'Error updating project in database' })
            })
    }  
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
        actDb.remove(id)
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