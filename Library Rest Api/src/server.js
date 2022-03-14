const app = require("./index.js")

const connect = require("./configues/database.js")

app.listen(5555,async ()=>{
    try{
        await connect();
    }
    catch (err)
    {
        console.log("Sever file Error",err)
    }
    console.log("listening on port 5555")
})