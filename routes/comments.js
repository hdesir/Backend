import express from "express";
import {} from "../controllers/comments.js";
import {createComment, deleteComment, getComment} from "../controllers/comments.js"


const router = express.Router()
 
//create a video

router.post("/", createComment)
router.delete("/comment/:id", deleteComment)
router.get("/videoComments", getComment)



export default router;