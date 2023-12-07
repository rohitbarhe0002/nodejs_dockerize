const express = require("express");
const app =  express();
app.get("/",(req,res)=>{
    res.json([
        {userId:50,name:"cush",age:23},
        {userId:2,name:"fd",age:23},
        {userId:3,name:"rohit",age:23},
        {userId:4,name:"rohit",age:23}

    ])
}) 

app.listen(5000,()=>{
    console.log("app is running on port 5000");
})