const express = require("express");
const app = express();
const friends = require('../data/friends.js');


module.exports = function(app) {
    app.get("/api/friends", (req, res) => {
        res.json(friends)
    });

    // app.post("/api/friends", function(req, res) {
    //     // req.body hosts is equal to the JSON post sent from the user
    //     // This works because of our body-parser middleware
    //     var friend = req.body;
    //     // Using a RegEx Pattern to remove spaces from newCharacter
    //     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    //     friend.routeName = friend.name.replace(/\s+/g, "").toLowerCase();

    //     console.log(friend);

    //     friends.push(friend);

    //     res.json(friend);
    // });
}