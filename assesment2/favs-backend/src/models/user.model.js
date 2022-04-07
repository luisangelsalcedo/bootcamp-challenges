import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    email: String,
    password: String,
    favslists: [{ type: Schema.Types.ObjectId, ref: "Favslist" }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);
export default userModel;
