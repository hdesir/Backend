import express from "express";
import {addVideo, random, trend, search, search2, addView, getByTag, category, news, channel, categoryNew} from "../controllers/video.js"
import { getVideo } from "../controllers/video.js";

const router = express.Router()
 
//create a video

router.post("/", addVideo)
router.put("/:id", addView)
router.delete("/:id", addVideo)
router.get("/find/:id", getVideo)
router.get("/random", random)
router.get("/trend", trend)
router.put("/view/:id", addVideo)
router.get("/search", search)
router.get("/search2", search2)
router.get("/category", category)
router.get("/categoryNew", categoryNew)
router.get("/news", news)
router.get("/channel", channel)
router.get("/tag", getByTag)

export default router;