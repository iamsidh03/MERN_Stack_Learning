const express =require('express');
const path =require('path');
const app=express();


app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"views"));

const products =[
    {
        id:1,
        title:"Product 1",
    },
    {
        id:2,
        title:"Product 2",
    },
    {
        id:3,
        title:"Product 3",
    },
];
app.get("/",(req,res) =>{
    res.render("home",{title:"Home page",products:products});
});
app.get("/about",(req,res) =>{
    res.render("about",{title:"About page", products:products});
});

const port =3000;
app.listen(port,() =>{
    console.log(`Server is running on http://localhost:${port}`);
});