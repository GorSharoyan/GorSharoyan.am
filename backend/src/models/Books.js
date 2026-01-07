import { Schema } from "mongoose";

const booksSchema = new Schema({
    author:{
        type:String,
        required:true
    } ,
    name:{
        type:String,
        required:true
    } ,
    shortDescription:{
        type:String;
        required:true
    } ,
    year:{
        type:Number,
        required:true
    } ,
},{ timestamps: true })

export default booksSchema