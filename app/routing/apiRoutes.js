var path = require("path");

var bikes = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res){
        res.json(bikes);
 
    });
    app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);
        
        // for (i = 0; i < )

        res.end();
    });
    
}

