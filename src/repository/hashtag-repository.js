import Hashtag from "../models/hashtag.js";
class HashtagRepository {
  async create(data) {
    try {
      const response = await Hashtag.create(data);
      return response;
    } catch (error) {
      console.logg(error);
      throw error;
    }
  }
  async bulkCreate(data) {
    try {
      const response = await Hashtag.insertMany(data);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getAllHashtag() {
    try {
      const response = await Hashtag.find({});
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getHashtagByName(text) {
    try {
      const response = await Hashtag.find({
        text:text
      });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getHashtag(id) {
    try {
      const response = await Hashtag.findById(id);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async deleteHashtag(data) {
    try {
      const response = await Hashtag.deleteOne(data);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default HashtagRepository;
