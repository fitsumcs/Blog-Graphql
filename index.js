import express from 'express';

const app = express()


app.get("/", (req,res)=>{

    res.send("This is Test for Graphql")

})


app.listen(3000, ()=>console.log("The Server is Running .."))