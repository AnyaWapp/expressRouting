import express from 'express';
import {hello, APINames} from './routes.js';
// const express = require('express');
const server = express();
// const userRouter = express.Router();
const port = 3000;

server.get('/hello', function (req, res)
{
    //const filename = __dirname + '\\Wombat.jpg';
    res.send(hello());
    //res.sendFile(filename);
});

server.get('/api/names', async (req, res) => {
    const result = await APINames();
    res.send(result);
});

server.listen(port, function ()
{
    console.log('Listing on ' + port);
});

