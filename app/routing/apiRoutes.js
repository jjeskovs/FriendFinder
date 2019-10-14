var bikes = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res){
 
        res.json(bikes);
    });
    app.post("/api/friends", function(res, req) {
        console.log(req.body.scores)
    });
    
}

