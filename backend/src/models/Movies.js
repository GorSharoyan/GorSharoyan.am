import { Schema } from "mongoose";


const moviesSchema = new Schema ({
    name:{
        type:String,
        required: true
    },
    genre:{
        type:String,
        required: true
    },
    director:{
        type:String,
        required: true
    },
    year:{
        type:Number,
        required: true
    },
}{ timestamps: true })

export default moviesSchema