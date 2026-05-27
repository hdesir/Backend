import User from "../models/User.js";
import Videos from "../models/Video.js";
import { createError } from "../error.js";


export const addVideo = async (req, res, next) => {
  const video = await Videos.findById(req.params.title);
  if (!video){
    const newVideo = new Videos({ ...req.body });
    try {
      const savedVideo = await newVideo.save({}, {$set: {'title': ''}});
      res.status(200).json(savedVideo);
    } catch (err) {
      next(err);
    }
  }};


  
  
//   export const deleteVideo = async (req, res, next) => {
//     try {
//       const video = await Video.findById(req.params.id);
//       if (!video) return next(createError(404, "Video not found!"));
//       if (req.user.id === video.userId) {
//         await Video.findByIdAndDelete(req.params.id);
//         res.status(200).json("The video has been deleted.");
//       } else {
//         return next(createError(403, "You can delete only your video!"));
//       }
//     } catch (err) {
//       next(err);
//     }
//   };

  
 export const getVideo = async (req, res, next) => {
   try {
      res.setHeader('Access-Control-Allow-Origin', '*');
      const video = await Videos.findById(req.params.id);
      res.status(200).json(video);
    } catch (err) {
     next(err);
    }
  };
  
   export const addView = async (req, res, next) => {
     try {
      await Videos.findByIdAndUpdate();
       res.status(200).json("The view has been increased.");
       
     } catch (err) {
      next(err);
    }
   };
  
 export const random = async (req, res, next) => {
  try {
      res.setHeader('Access-Control-Allow-Origin', '*');
     const videos = await Videos.aggregate([{ $sample: { size: 40 } }]);
   res.status(200).json(videos);
   
   } catch (err) {
     next(err);
   }
 };
  
 export const trend = async (req, res, next) => {
   try {
        res.setHeader('Access-Control-Allow-Origin', '*');
      const videos = await Videos.find().sort({ views: -1 });
      res.status(200).json(videos);
     
   } catch (err) {
     next(err);
   }
  };
  
//   export const sub = async (req, res, next) => {
//     try {
//       const user = await User.findById(req.user.id);
//       const subscribedChannels = user.subscribedUsers;
  
//       const list = await Promise.all(
//         subscribedChannels.map(async (channelId) => {
//           return await Video.find({ userId: channelId });
//         })
//       );
  
//       res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
//     } catch (err) {
//       next(err);
//     }
//   };
  
  // export const getByCat = async (req, res, next) => {
  //    const category = req.query.q.split(',');
  //    try {
  //      const videos = await Video.find({ category: { $in: [category] } });
  //      res.status(200).json(videos);
      
  //    } catch (err) {
  //      next(err);
  //    }
  //  };
  
  export const search = async (req, res, next) => {
    const query = req.query.q;
    try {
     
      const videos = await Videos.find({
        tags: { $regex: query, $options: "i" },
        
      }).limit(40).sort({views: -1});
      
    
      res.status(200).json(videos);
    } catch (err) {
      next(err);
    }
  };

    export const search2 = async (req, res, next) => {
    const query = req.query.q;
    try {
      res.setHeader('Access-Control-Allow-Origin', '*');
      const videos = await Video.find({
         tags: { $regex: query, $options: "i",
        
      }}).limit(200).sort({TrendValue: -1});
     
      
      res.status(200).json(videos);
     

    } catch (err) {
      next(err);
    }
  };

    export const category = async (req, res, next) => {
    const query = req.query.q;
    try {
      res.setHeader('Access-Control-Allow-Origin', '*');
      const page = req.query.page || 1;
      const limit = req.query.limit || 50;
      const skip = (page -1) * limit;

      const videos = await Videos.find({
         category: { $regex: query, $options: "i",
        
      }}).limit(limit).skip(skip).sort({TrendValue: -1});
      

      res.status(200).json(videos);
     

    } catch (err) {
      next(err);
    }
  };

 export const categoryNew = async (req, res, next) => {
    const query = req.query.q;
    try {
      res.setHeader('Access-Control-Allow-Origin', '*');
      const page = req.query.page || 1;
      const limit = req.query.limit || 50;
      const skip = (page -1) * limit;

      const videos = await Videos.find({
         category: { $regex: query, $options: "i",
        
      }}).limit(limit).skip(skip).sort({date: -1});
      
      const totalVideos = await Videos.countDocuments()

      res.status(200).json(videos);
     

    } catch (err) {
      next(err);
    }
  };
  
    export const news = async (req, res, next) => {
    const query = req.query.q;
    try {
      const videos = await Videos.find({
         category: { $regex: query, $options: "i",
        
      }}).limit(200).sort({date: -1});
     
      
      res.status(200).json(videos);
     

    } catch (err) {
      next(err);
    }
  };

    export const channel = async (req, res, next) => {
    const query = req.query.q;
    try {
      const videos = await Videos.find({
         channelT: { $regex: query, $options: "i",
        
      }}).limit(200).sort({date: -1});
     
      res.status(200).json(videos);
     
    } catch (err) {
      next(err);
    }
  };



export const getByTag = async (req, res, next) => {
  const tags = req.query.tags.split(",");
  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const videos = await Videos.find({ tags: { $in: tags } }).limit(20);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

//////////// index page fetches ///////////////////////////

 export const indexNew = async (req, res, next) => {
    const query = req.query.q;
    try {
      res.setHeader('Access-Control-Allow-Origin', '*');
      const page = req.query.page || 1;
      const limit = req.query.limit || 15;
      const skip = (page -1) * limit;

      const videos = await Videos.find({
         category: { $regex: query, $options: "i",
        
      }}).limit(limit).skip(skip).sort({date: -1});
      

      res.status(200).json(videos);
     

    } catch (err) {
      next(err);
    }
  };

   export const indexRandom = async (req, res, next) => {
  try {
      res.setHeader('Access-Control-Allow-Origin', '*');
     const videos = await Videos.aggregate([{ $sample: { size: 15 } }]);
   res.status(200).json(videos);
   
   } catch (err) {
     next(err);
   }
 };

 export const categoryIndex = async (req, res, next) => {
    const query = req.query.q;
    try {
      res.setHeader('Access-Control-Allow-Origin', '*');
      const page = req.query.page || 1;
      const limit = req.query.limit || 15;
      const skip = (page -1) * limit;

      const videos = await Videos.find({
         category: { $regex: query, $options: "i",
        
      }}).limit(limit).skip(skip).sort({TrendValue: -1});
      

      res.status(200).json(videos);
     

    } catch (err) {
      next(err);
    }
  };