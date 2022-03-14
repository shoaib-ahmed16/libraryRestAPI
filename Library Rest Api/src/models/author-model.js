const mongoose =require("mongoose")


// Section
// 1. create Schema

const authorSchema =new mongoose.Schema(
    {
        // book_id:{type:mongoose.Schema.Types.ObjectId,ref:'book',require:true},
        first_name:{type:String,require:true},
        last_name:{type:String,require:true}
    }
)

// 2.create Model for the schema
module.exports =mongoose.model("author",authorSchema)