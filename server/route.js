const authentificationController = require('./controllers/authentification');

module.exports = function (expressServer) {
    expressServer.post("/signup", authentificationController.signup)
}