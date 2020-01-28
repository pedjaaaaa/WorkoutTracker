var express = require("express");
var mongoose = require("mongoose");
var logger = require("morgan");

var app = express();
var PORT = process.env.PORT || 3021;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(MONGODB_URI);

app.use(require("./routes/route.js"));

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
