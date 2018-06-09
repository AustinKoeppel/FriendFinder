var router = require('express').Router();
var friends = require('../data/friends.js');

console.log(friends);

function SubmitData({name, age, scores}){
    this.name = name || "noname";
    this.age = age || "72";
    this.scores = scores || [1,1,1,1,1,1,1,1,1,1];
}

function addFriend({name, age, scores}){
    console.log(name);
    if(friends[name]) {
      return false;
    }
    friends[name.toLowerCase().replace(/\s+/g, '')] = new SubmitData({name, age, scores});
}

function getBestBoi(newFriend) {
    let lowestScore = 40;
    let lowestScoreKey = "";
    for(key in friends) {
        let temp = friends[key].scores;
        console.log(temp);
        let totesScore = 0;
        for(let i=0;i < 10; i++) {
            totesScore += Math.abs(temp[i] - newFriend.scores[i]);
        }
        if(totesScore == 0) {
            return friends[key].name;
        }
        else if(totesScore < lowestScore) {
            lowestScoreKey = key;
            lowestScore = totesScore;
        }
    }
    return friends[lowestScoreKey].name;
}

// individual products routes
router.get('/friends', function(req, res, next) {  
   res.json(friends);
});

router.post('/friends',function(req, res, next) {
    var newFriend = req.body;
    console.log(newFriend);
    let bestBoi = getBestBoi(newFriend);
    addFriend(newFriend);
    res.json(bestBoi);
});

module.exports = router;  