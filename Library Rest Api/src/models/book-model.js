const mongoose =require("mongoose")
const { checkout } = require("..")


// Section
// 1. create Schema

const bookSchema =new mongoose.Schema(
    {
        section_id:{type:mongoose.Schema.Types.ObjectId,ref:'section'},
        author_id:{type:mongoose.Schema.Types.ObjectId,ref:'author'},
        book_name:{type:String,unique:true},
        book_body:{type:String,},
        checkout:{type:String,},
        checkin:{type:String,}
    }
)

// 2.create Model for the schema
module.exports =mongoose.model("book",bookSchema)