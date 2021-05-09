const express = require('express');
const app = express();
const port = 3000;

app.get("/", function(request, response) {
    console.log(request);
    response.send("hello");
});

app.get("/contact", function(request, response) {
    console.log(request);
    response.send("contact me at hei@stighansen.no");
});

app.get("/about", function(request, response) {
    console.log(request);
    response.send("A coding product owner");
});

app.listen(3000, function() {
    console.log("Server has started on port " + port);
});