var router = require('express').Router();
let path = require("path");

router.get("/survey", function(req, res) {
    res.sendFile(path.resolve("./app/public/survey.html"));
});

router.use(function(req, res){
    res.sendFile(path.resolve("./app/public/home.html"));
});

module.exports = router;  