import express from "express";
import connect from "./config/database.js";
import Tweet from "./models/tweet.js";
import Hashtag from "./models/hashtag.js";
import TweetRepository from "./repository/tweet-repository.js";
import router from './routes/index.js'
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',router)

app.listen(3000, async () => {
  console.log("Server started at 3000");
  connect();
  console.log("MongoDB connected");
//   Tweet.create({
//     content: "This is my first tweet",
//     likes: 25,
//     noOfRetweets: 5,
//     comment: "This is my first comment",
//   });
    // Hashtag.create({
    //   text: "#Travel",
    //   tweets: ["67a9ab2c6190c7e058549c2c"],
    // });
    // const tweetRepo = new TweetRepository();
    // let tweets = await tweetRepo.deleteTweet({
    //   "_id": "67a9ab2c6190c7e058549c2c",
    // });
    // console.log(tweets);
});
