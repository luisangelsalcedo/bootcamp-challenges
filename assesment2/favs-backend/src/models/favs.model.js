import mongoose from "mongoose";

const Schema = mongoose.Schema;
const favsSchema = new Schema(
  {
    name: String,
    list: Array,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const favsModel = mongoose.model("Favs", favsSchema);
export default favsModel;
