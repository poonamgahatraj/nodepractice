const express= require("express")

const app=express();
const port =3000;

app.get("/",(req,res)=>{
res.send("this is my first express app")
});


app.get("/about",(req,res)=>{
    res.status(200).send("this is my aboutpage first express app")
    });

    
app.post("/about",(req,res)=>{
    res.send("this is  a post request of my aboutpage first express app")
    });
app.listen(port,()=>{
    console.log(`this app is running at port ${port}`)
})