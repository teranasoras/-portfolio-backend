const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const projectRouter = require('./projects/projects-router.js')
const messageRouter = require('./messages/message-router.js')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/projects', projectRouter);
server.use('/messages', messageRouter);

server.get("/", (req, res) =>{
    res.json({api: "online"});
});

module.exports = server;