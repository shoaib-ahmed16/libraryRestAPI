const mongoose = require("mongoose");

module.exports =()=>{
    return mongoose.connect(
        // "mongodb+srv://shoaib16:shoaib16@cluster0.vu5dd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
        // "mongodb+srv://dhaval:dhaval_123@cluster0.ljuvz.mongodb.net/web15-atlas?retryWrites=true&w=majority"
        // "mongodb+srv://Shoaib16:<password>@cluster0.xrndg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
        "mongodb://127.0.0.1:27017/library"
        )
}