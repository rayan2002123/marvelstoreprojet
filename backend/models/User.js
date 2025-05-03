const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  cards: [
    {
      number: String,
      date: String,
      cvc: String,
      holder: String
    }
  ],
  addresses: [
    {
      full: String,
      label: String
    }
  ]
});

module.exports = mongoose.model("User", UserSchema);
