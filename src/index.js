import express from "express";
import connect from "./config/database.js";
import Tweet from "./models/tweet.js";
const app = express();

app.listen(3000, async () => {
  console.log("Server started at 3000");
  connect();
  console.log("MongoDB connected");
  Tweet.create({
    content: "This is my first tweet",
    likes: 25,
    noOfRetweets: 5,
    comment: "This is my first comment",
  });
});
