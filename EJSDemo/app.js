var express = require('express');
var app = express();

// telling Express which directory to look in, 
// in addition to the default directory "Views"
app.use(express.static("public"));

// telling Express that file extensions
// in Views are by default ".ejs"
app.set("view engine", "ejs")

app.get('/', function(req, res) {
    res.render("home");
});

app.get('/fallinlovewith/:thing', function(req, res) {
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Post 1", author: "Suzy"},
        {title: "My adorable pet bunny", author: "Leon"},
        {title: "My visit to Australia", author: "Archibald"},
        {title: "Sketchy animals", author: "Jake Tupper"}
    ];
    
    res.render("posts", {posts: posts});
});


// Tell Express to listen to requests
app.listen (process.env.PORT, process.env.IP, function() {
    console.log('Server has started on IP ' + process.env.IP + ', port ' + process.env.PORT);
});