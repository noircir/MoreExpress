var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = ["Tony", "Murray", "Connor", "Lily"];

app.get('/', function(req, res) {
    res.render("home");
});

app.get('/friends', function(req, res) {
    res.render("friends", {group: friends});
});

app.post('/addfriend', function(req, res) {
    // req.body returns {key:value} (object)
    // req.body.key returns value
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    console.log(newFriend);
    // res.send("YOU HAVE REACHED THE POST ROUTE!!!");
    res.redirect("/friends");
});

app.listen (process.env.PORT, process.env.IP, function() {
    console.log('Server has started!!! on IP ' + process.env.IP + ', port ' + process.env.PORT);
});