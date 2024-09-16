const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = mongoose
    .connect(
      "mongodb+srv://prathameshpanse500:Prathamesh09102003@cluster0.lhy2lmg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("MONGO CONNECTION OPEN!!!");
    })
    .catch((err) => {
      console.log("OH NO MONGO CONNECTION ERROR!!!!");
      console.log(err);
    });
};

module.exports = connectDB;
