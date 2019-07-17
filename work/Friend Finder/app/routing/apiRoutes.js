// Import the list of friend entries
var friends = require('../data/friends.js');

// Exporting my API routes
module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        var smallestDiff = -1;
        var bestMatch = null;
        console.log(friendData);
        if (friendData.length) {
            friendData.forEach(function (item) {
                var tempScores = item.scores;
                console.log(item);
                var totalDiff = 0;
                req.body.scores.forEach(function (score, index) {
                    totalDiff += Math.abs(score - tempScores[index]);
                });
                if (totalDiff < smallestDiff || smallestDiff == -1) {
                    smallestDiff = totalDiff;
                    bestMatch = item;
                }
            });
            res.json({
                name: bestMatch.name,
                photo: bestMatch.photo
            });
        }

        friendData.push(req.body);
    });
};
