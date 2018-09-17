const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const api_routes = require("./routes");
const port = process.env.PORT || 8080;
const config = require("./config");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const db = require("./models");
const databaseURI = ("mongodb://localhost:27017/rd-portfolio-db");
const app = express();
const logger = require("morgan");
let uri = process.env.MONGOLAB_URI;
let db2 = mongoose.connection;
let cors = require('cors');

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || databaseURI, {
useNewUrlParser: true
});;
mongoose.connect("mongodb://localhost:27017/rd-portfolio-db", {
    useNewUrlParser: true
});

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect(databaseURI);
}
// Set up error log for mongoose error
db2.on('error', function (err) {
    console.log("MONGOOSE ERROR: ", err);
});
// Set up successful Mongoose Connnection log
db2.once('open', function () {
    console.log("Mongoose Connection Successful. ");
});
// Initialize passport
app.use(passport.initialize());
// Start passport session
app.use(passport.session());
// Set up logger
app.use(logger('dev'));

// set up Express 
app.use(express.static(path.join(__dirname, "client/build")));

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({
    extended: true
}));

// Use express.static to serve the public folder as a static directory
app.use(express.static('client/public'));

//Set up Body Parser
app.use(bodyParser.json());


// Set up CORS
app.use(cors());
app.use("/", api_routes);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    next();
});

app.post("/api/message", function (req, res, next) {
    db.Message.create(req.body)
        .then(function (dbMessage) {
            // If a Message was created successfully, find one User (there's only one) and push the new Message's _id to the User's `Messages` array
            // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
            // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
            return db.User.findOneAndUpdate({}, {
                $push: {
                    Messages: dbMessage._id
                }
            }, {
                new: true
            });
        })
        .then(function (dbUser) {
            // If the User was updated successfully, send it back to the client
            res.json(dbUser);
        })
        .catch(function (err) {
            // If an error occurs, send it back to the client
            res.json(err);
        });
});
// Route for retrieving all Users from the db
app.get("/user", function (req, res) {
    // Find all Users
    db.User.find({})
        .then(function (dbUser) {
            // If all Users are successfully found, send them back to the client
            res.json(dbUser);

        })
        .catch(function (err) {
            // If an error occurs, send the error back to the client
            res.json(err);
        });
});
// Route for retrieving all Notes from the db
app.get("/message", function (req, res) {
    // Find all Notes
    db.Message.find({})
        .then(function (dbMessage) {
            // If all Notes are successfully found, send them back to the client
            res.json(dbMessage);
        })
        .catch(function (err) {
            // If an error occurs, send the error back to the client
            res.json(err);
        });
});

app.get("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
    // res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.use(
    session({
        secret: "crazy",
        resave: false,
        saveUninitialized: false
    })
);

// Start the API server
app.listen(port, function () {
    console.log(`🌎  ==> API Server now listening on port ${port}!`);
});

// seed db
// db.User.create({
//     name: "Tester McFly",
//     email: "tester@gmail.com",
//     subject: "555-555-5555",
//     message: "This is a tester message"
// })
// .then(function (dbUser) {
//     console.log(dbUser);
// })
// .catch(function (err) {
//     console.log(err.message);
// }); 