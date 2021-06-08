const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes"),
  cors = require("cors"),
  bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/carsDatabase", {
  useNewUrlParser: true,
});

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", routes);

app.listen(5000, () => {
  console.log("Server has started!");
});
