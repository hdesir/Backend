import User from "../models/User.js";
import Comment from "../models/Comment.js";
import { createError } from "../error.js";


export const createComment = async (req, res, next) => {
    const {id, comment, username} = req.body
    const createdComment = new Comment({ ...req.body})
    try {
      const savedComment = await createdComment.save({});
      res.status(200).json(savedComment);
       
       } catch (err) {
          next(err);
        }
      };


  
  
  export const deleteComment = async (req, res, next) => {
    try {
      const comment = await Comment.findById(req.params.id);
      if (!comment) return next(createError(404, "Comment not found!"));
      if (req.user.username === comment.username) {
        await Video.findByIdAndDelete(req.params.id);
        res.status(200).json("The comment has been deleted.");
      } else {
        return next(createError(403, "You can delete only your comment!"));
      }
    } catch (err) {
      next(err);
    }
  };

export const getComment = async (req, res, next) => {
   const videoID = req.query.q;
       try {
        res.setHeader('Access-Control-Allow-Origin', '*')
         const comments = await Comment.find({
            videoID: { $regex: videoID, $options: "i",
           
         }}).limit(200).sort({createdAt: -1});
        
         
         res.status(200).json(comments);
        
   
       } catch (err) {
         next(err);
       }
     };
  
//    export const addView = async (req, res, next) => {
//      try {
//       await Videos.findByIdAndUpdate();
//        res.status(200).json("The view has been increased.");
       
//      } catch (err) {
//       next(err);
//     }
//    };
  
//  export const random = async (req, res, next) => {
//   try {
//       res.setHeader('Access-Control-Allow-Origin', '*');
//      const videos = await Videos.aggregate([{ $sample: { size: 40 } }]);
//    res.status(200).json(videos);
   
//    } catch (err) {
//      next(err);
//    }
//  };
  
//  export const trend = async (req, res, next) => {
//    try {
//         res.setHeader('Access-Control-Allow-Origin', '*');
//       const videos = await Videos.find().sort({ views: -1 });
//       res.status(200).json(videos);
     
//    } catch (err) {
//      next(err);
//    }
//   };
  
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
  
//   export const search = async (req, res, next) => {
//     const query = req.query.q;
//     try {
     
//       const videos = await Videos.find({
//         tags: { $regex: query, $options: "i" },
        
//       }).limit(40).sort({views: -1});
      
    
//       res.status(200).json(videos);
//     } catch (err) {
//       next(err);
//     }
//   };

//     export const search2 = async (req, res, next) => {
//     const query = req.query.q;
//     try {
//       res.setHeader('Access-Control-Allow-Origin', '*');
//       const videos = await Video.find({
//          tags: { $regex: query, $options: "i",
        
//       }}).limit(200).sort({TrendValue: -1});
     
      
//       res.status(200).json(videos);
     

//     } catch (err) {
//       next(err);
//     }
//   };

//     export const category = async (req, res, next) => {
//     const query = req.query.q;
//     try {
//       res.setHeader('Access-Control-Allow-Origin', '*');
//       const page = req.query.page || 1;
//       const limit = req.query.limit || 50;
//       const skip = (page -1) * limit;

//       const videos = await Videos.find({
//          category: { $regex: query, $options: "i",
        
//       }}).limit(limit).skip(skip).sort({TrendValue: -1});
      
//       const totalVideos = await Videos.countDocuments()
//       // res.send({
//       //   videos,
//       //   currentPage: page,
//       //   totalVideos: totalVideos,
//       //   totalPages: Math.ceil(totalVideos/limit),
//       // })
//       res.status(200).json(videos);
     

//     } catch (err) {
//       next(err);
//     }
//   };

//  export const categoryNew = async (req, res, next) => {
//     const query = req.query.q;
//     try {
//       res.setHeader('Access-Control-Allow-Origin', '*');
//       const page = req.query.page || 1;
//       const limit = req.query.limit || 50;
//       const skip = (page -1) * limit;

//       const videos = await Videos.find({
//          category: { $regex: query, $options: "i",
        
//       }}).limit(limit).skip(skip).sort({date: -1});
      
//       const totalVideos = await Videos.countDocuments()
//       // res.send({
//       //   videos,
//       //   currentPage: page,
//       //   totalVideos: totalVideos,
//       //   totalPages: Math.ceil(totalVideos/limit),
//       // })
//       res.status(200).json(videos);
     

//     } catch (err) {
//       next(err);
//     }
//   };
  
//     export const news = async (req, res, next) => {
//     const query = req.query.q;
//     try {
//       const videos = await Videos.find({
//          category: { $regex: query, $options: "i",
        
//       }}).limit(200).sort({date: -1});
     
      
//       res.status(200).json(videos);
     

//     } catch (err) {
//       next(err);
//     }
//   };

//     export const channel = async (req, res, next) => {
//     const query = req.query.q;
//     try {
//       const videos = await Videos.find({
//          channelT: { $regex: query, $options: "i",
        
//       }}).limit(200).sort({date: -1});
     
      
//       res.status(200).json(videos);
     

//     } catch (err) {
//       next(err);
//     }
//   };

// export const getByTag = async (req, res, next) => {
//   const tags = req.query.tags.split(",");
//   try {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const videos = await Videos.find({ tags: { $in: tags } }).limit(20);
//     res.status(200).json(videos);
//   } catch (err) {
//     next(err);
//   }
// };
