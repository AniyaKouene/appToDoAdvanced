const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const expressServer = express();
const router = require("./route");
const mongoose = require("mongoose")
const cors = require("cors")

//DB setup
mongoose.connect("mongodb://aniyaUser:AniyaKouene13@ds251332.mlab.com:51332/dbaniya001", {
    useNewUrlParser: true
});
mongoose.connection.once('open', () => console.log("connecté a mongoLab"))
    .on('error', error => console.log("erreur de connection à mongoLab", error));

// App Setup
expressServer.use(morgan('combined'));
expressServer.use(cors())
expressServer.use(bodyParser.json({ type: '*/*' }));
router(expressServer);


// Server Setup
const port = 3090;
const server = http.createServer(expressServer);
router(expressServer);
server.listen(port);
console.log("le server ecoute sur le port : ", port);