var path = require("path");

var bikes = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res){
        res.json(bikes);
 
    });
    
    app.post("/api/friends", function(req, res) {
        
        // console.log(req.body.scores);
      
        //lets grab the data sent to us 
        var user = req.body;

        // lets turn user info into what we can use
        for (var i = 0; i < user.scores.length; i++){
            user.scores[i] = parseInt(user.scores[i]);
        }
        
        // console.log(user)

        var bestBikeIndex = 0;
        var minimumDifference = 40;

        for (var i = 0; i < bikes.length; i++){
            var totalDifference = 0;
            
                for (var j = 0; j < bikes[i].scores.length; j++){
                     var difference = Math.abs(user.scores[j] - bikes[i].scores[j]);
                        totalDifference += difference;
                };
                    if (totalDifference < minimumDifference){
                        bestBikeIndex = [i];
                        minimumDifference = totalDifference;
                    };
        };
        res.json(bikes[bestBikeIndex]);
        // console.log(bikes)
        // console.log(bestBikeIndex)
        console.log(bikes[bestBikeIndex])
        
    });
};

        
 

    

