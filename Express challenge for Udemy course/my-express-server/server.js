const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response) {
    response.sendFile(__dirname + "/index.html");
});


app.post("/", function(request, response) {

    console.log(request.body);

    var weight = Number(request.body.weight);
    var height = Number(request.body.height);
    var result = (weight / (height * height) * 10000).toFixed(2);

    response.send("Your BMI is: " + result);
});

app.listen(port, function() {
    console.log("Server is now running on port " + port);
});