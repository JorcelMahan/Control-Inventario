const mongoose = require("mongoose");

mongoose.connect(URI, {
  userNewUrlParser: true,
  useCreateIndes: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database is connected");
});
