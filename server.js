var express = require("express");
var path = require("path");

var app = express();
var PORT =process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./app/public")); // will make it work

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});