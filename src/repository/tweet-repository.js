import Tweet from "../models/tweet.js";
import CrudRepository from "./crud-repository.js";

class TweetRepository extends CrudRepository {
  constructor(){
    super(Tweet)
  }
  async create(data) {
    try {
      const response = await Tweet.create(data);
      return response;
    } catch (error) {
      console.logg(error);
      throw error;
    }
  }
  async getAllTweets(data) {
    try {
      const response = await Tweet.find({});
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getTweet(id) {
    try {
      const response = await Tweet.findById(id);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async deleteTweet(data) {
    try {
      const response = await Tweet.deleteOne(data);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default TweetRepository;
