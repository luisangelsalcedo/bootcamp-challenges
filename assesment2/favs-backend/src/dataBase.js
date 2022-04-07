import mongoose from "mongoose";

(async function () {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.log(error);
  }
})();

mongoose.connection.once("open", () => console.log("connected database"));
mongoose.connection.on("error", err => console.log(err));
