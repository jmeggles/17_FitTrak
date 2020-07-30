// import npm packages
const logger = require("morgan");
const express = require("express");
const mongoose = require("mongoose");

// use express Middleware ( urlEncoded, json and static )
// Creating express app and configuration
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// create PORT and assign to a variable.
const PORT = process.env.PORT || 3000;

// connect to Mongo Db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });

// import your routes (API and HTML Routes)
// Requiring our routes
require("./routes/htmlRoute.js")(app);
require("./routes/apiRoute.js")(app);

// start the server and listen to requests
// Syncing our database and logging a message to the user upon success
app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});