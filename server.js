let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api',require('./app/routing/apiRoutes'));
app.use('/',require('./app/routing/htmlRoutes'));

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});