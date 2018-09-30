const authentificationController = require('./controllers/authentification');
require('./services/passport');
const passport = require('passport')

const requireToken = passport.authenticate('jwt', {session: false});

module.exports = function (expressServer) {
    expressServer.post("/signup", authentificationController.signup)
    expressServer.get("/ressourcesSecrete", requireToken, function(req, res){
        res.send({codeDeLamort: 42})
    })
};

