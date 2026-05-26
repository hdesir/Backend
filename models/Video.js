import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,

        },

        RelativeDate:{
            type: String,
            
        },

        date: {
            type: Date, 
        
        },

        views:{
            type: Number,
        },

        viewString:{
            type: String,
        },

        TrendValue:{
            type: Number,
        },

        duration:{
            type: String,
        },

        videoUrl: {
            type: String, 
            require: true,
            unique: true, 
            index: true,
            
        },

        imgUrl: {
            type: String, 
            require: true,
            unique: true, 
            index: true,
        },

        imgUrl2: {
            type: String
        },

        tags:{
            type: String,
            default: [],

        },

        category:{
            type: String,
            default: [],

        },

        channelT:{
            type: String,
            
        },

        description:{
            type: String,
            default: "",
            
        },

    },
)

        export default mongoose.model("Videos", VideoSchema)