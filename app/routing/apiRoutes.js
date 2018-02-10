let friends = require('../data/friends.js');

module.exports = function(app) {
    app.get("/api/friends", (req, res) => {
        res.json(friends)
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body)
        friends.push(req.body);
        console.log('friends', friends);
        res.json(true);

    });
}