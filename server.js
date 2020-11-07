const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethoddb", { useNewUrlParser: true });

var routes = require("");

app.use(routes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

