const mongoose = require("mongoose");

const schema = mongoose.Schema({
  make: String,
  model: String,
  year: Number,
});

module.exports = mongoose.model("Cars", schema);
