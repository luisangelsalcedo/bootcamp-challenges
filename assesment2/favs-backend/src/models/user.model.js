import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    favslists: [{ type: Schema.Types.ObjectId, ref: "Favslist" }],
    is_google_log: { type: Boolean, default: false },
    profileObj: { type: Object, default: {} },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);
export default userModel;
