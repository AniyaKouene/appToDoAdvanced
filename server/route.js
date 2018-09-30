module.exports = function (expressServer) {
    expressServer.get("/", function (req, res, next) {
        res.send({
            serverData: ["One Piece", "Naruto", "Bleach"]
        });
    });
    expressServer.get("/signup", function (req, res, next) {
        res.send({
            serverData: ["One Piece", "Naruto", "Bleach"]
        });
    });
}