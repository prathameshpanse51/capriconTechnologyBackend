const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const adminLogin = mongoose.model("admin", adminSchema);

module.exports = adminLogin;
