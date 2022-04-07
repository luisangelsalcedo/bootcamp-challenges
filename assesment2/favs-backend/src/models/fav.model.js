import mongoose from "mongoose";

const Schema = mongoose.Schema;
const favSchema = new Schema(
  {
    title: String,
    description: String,
    link: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const favModel = mongoose.model("Fav", favSchema);
export default favModel;
