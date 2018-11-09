const express = require('express')
const server = express();
server.use(express.json());
const projectRoutes = require('../projectModel/projectModelRoutes.js')
const actionRoutes = require('../actionModel/actionModelRoutes.js')

server.use('/', projectRoutes)
server.use('/actions', actionRoutes)

module.exports = server;