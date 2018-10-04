const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const expressServer = express();
const router = require('./route');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors')

mongoose.connect("mongodb://aniyaUser:AniyaKouene13@ds251332.mlab.com:51332/dbaniya001", {
    useNewUrlParser: true
});
mongoose.connection.once('open', () => console.log("connecté a mongoLab"))
    .on('error', error => console.log("erreur de connection à mongoLab", error));
expressServer.use(morgan('combined'));
expressServer.use(bodyParser.json({
    type: "*/*"
}));
expressServer.use(cors());



const port = 3090;
const server = http.createServer(expressServer);
router(expressServer);
server.listen(port);
console.log("le server ecoute sur le port : ", port);