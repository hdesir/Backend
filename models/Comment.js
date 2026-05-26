import mongoose, {Schema} from "mongoose"

const CommentSchema = new mongoose.Schema(
    {
        username: {
            type:String,
            required:true,
        },
        videoID: {
            type: String, 
            require: true,
        },        
        
        comment: {
            type: String,
        },

        // replies:[
        //     {
        //     username: {
        //     type:String,
        //     required:true,
        // },
        //  commentId: {
        //     type: Schema.Types.ObjectId, 
        //     require: true,
        // },
        // reply:{
        //     type: String,
        //     required: true,
        // },
        createdAt: {
           type: Date, 
            require: true,
            default: new Date().getTime()   },
        
        picture: {
            type: String,
                default: "https://randomimageurl.com/assets/images/local/20260103_0518_Bold%20Abstract%20Composition_simple_compose_01ke204yvyf6pbx3ksw2cjcgkw_compressed_q80.jpeg"
        },

        likes: {
            type: Number,
        },

        dislikes: {
            type: Number,
        }


    }, {
        timestamps: true
    }

)

export default mongoose.model("Comment", CommentSchema);