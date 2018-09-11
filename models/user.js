const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;


const user = new Schema({
  name: { type: String, required: false },
  email: { type: String, required: false },
  subject: { type: String, required: false },
  message: { type: String, required: false },
});

const User = mongoose.model("User", user);

module.exports = User;