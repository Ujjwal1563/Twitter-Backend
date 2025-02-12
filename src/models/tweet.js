import mongoose from "mongoose";
import { ObjectId } from "bson";

const tweetSchema = new mongoose.Schema({
  content: {
    type: String,
    required:true,
  },
  likes: {
    type: Number,
  },
  noOfRetweets: {
    type: Number,
  },
  comment: {
    type: String,
  },
});

const Tweet = mongoose.model("Tweet", tweetSchema);

export default Tweet;
