import  TweetRepository  from "../repository/tweet-repository.js";
import  HashtagRepository from "../repository/hashtag-repository.js";

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }
  async create(data) {
    try {
      const content = data.content;
      const tags = content
        .match(/#+[a-zA-Z0-9(_)]+/g)
        .map((tag) => tag.substring(1).toLowerCase());
      const tweet = await this.tweetRepository.create(data);
      const existTags= await this.hashtagRepository.findByName(tags);
      const textOfTags= existTags.map(tags=>tags.text)
      let newTags= tags.filter(tag=>!textOfTags.includes(tag))
      newTags= newTags.map(tag => {
        return {
            text:tag,
            tweet:[tweet.id]
        }
      })
      await this.hashtagRepository.bulkCreate(newTags);
      existTags.forEach((tag) => {
        tag.tweet.push(tweet.id);
        tag.save();
      });
      return tweet;
    } catch (error) {
        console.log(error);
        throw error;
    }
  }
  async getTweet(tweetId){
    const tweet = await this.tweetRepository.getTweet(tweetId);
    return tweet;
  }
}

export default TweetService;
