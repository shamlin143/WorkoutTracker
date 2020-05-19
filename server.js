require('dotenv').config()
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//Routes
app.use(require("../WorkoutTracker/routes/api"));
app.use(require("../WorkoutTracker/routes/html"));

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});