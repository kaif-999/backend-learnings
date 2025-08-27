const express = require('express')
const app = express()


app.listen(3000,()=>{
    console.log("hello world")
})



app.get("/",(req,res)=>{
    res.send("<h1>succesfully connected</h1>")
});