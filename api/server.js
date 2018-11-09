const express = require('express')
const server = express();
server.use(express.json());
const projectRoutes = require('../projectModel/projectModelRoutes.js')

server.use('/', projectRoutes)

module.exports = server;