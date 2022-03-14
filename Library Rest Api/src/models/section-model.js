const mongoose =require("mongoose")


// Section
// 1. create Schema

const sectionSchema =new mongoose.Schema(
    {
        Section_Catrogory:{type:String,require:true,unique:true},

    }
)

// 2.create Model for the schema
module.exports =mongoose.model("section",sectionSchema)