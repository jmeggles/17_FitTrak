// import npm packages
const logger = require("morgan");
const express = require("express");
const mongoose = require("mongoose");
// const path = require("path");

// use express Middleware ( urlEncoded, json and static )
// Creating express app and configuration
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// use logger middleware
app.use(logger("dev"));

// create PORT and assign to a variable.
const PORT = process.env.PORT || 3000;
// requiring models for syncing   ???????????????????????????????????????????????????????????

// connect to Mongo Db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });

// import your routes (API and HTML Routes)
// Requiring our routes
require("./routes/apiRoute.js")(app);
require("./routes/htmlRoute.js")(app);

// start the server and listen to requests
// Syncing our database and logging a message to the user upon success
app.listen(PORT, () => {
    console.log("==> 🌎  Visit http://localhost:3000/ in your browser.", PORT, PORT);
});