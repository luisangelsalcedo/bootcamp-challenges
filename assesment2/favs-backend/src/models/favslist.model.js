import mongoose from "mongoose";

const Schema = mongoose.Schema;
const favslistSchema = new Schema(
  {
    name: String,
    favs: [{ type: Schema.Types.ObjectId, ref: "Fav" }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const favslistModel = mongoose.model("Favslist", favslistSchema);
export default favslistModel;
