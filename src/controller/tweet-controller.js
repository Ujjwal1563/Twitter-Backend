import TweetService from "../services/tweet-service.js"

const tweetService = new TweetService();
export const createTweet = async (req,res) =>{
    try {
        const data = req.body;
        const response = await tweetService.create(data);
        return res.status(201).json({
            success:true,
            message:"Successfully created a Tweet",
            data:response,
            err:{}
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Error Encountered",
            data: {},
            err:error
        })
    }
}
export const getTweet = async (req,res) =>{
     try {
        const id = req.param.id;
       const response = await tweetService.getTweet(id);
       return res.status(201).json({
         success: true,
         message: "Successfully fetched a Tweet",
         data: response,
         err: {},
       });
     } catch (error) {
       return res.status(500).json({
         success: false,
         message: "Error Encountered",
         data: {},
         err: error,
       });
     }
}