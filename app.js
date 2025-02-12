const express= require("express");
const app= express();

const userRouter= require('./routes/routeUser.js');
app.use("/users",userRouter);




const reviewRouter=require('./routes/routeReview.js')
app.use("/reviews",reviewRouter);





const cardRouter=require('./routes/routeCard.js');
app.use("/cards",cardRouter);

// products
// app.get("/products",(req,res)=>{
// res.send("take product");
// });
// app.post("/products",(req,res)=>{
//     res.send("create product");
// });
// app.patch("/products",(req,res)=>{
//     res.send("update product");
// });
// app.delete("/products",(req,res)=>{
//         res.send("no product");
// });    



//users

// app.post("/users",(req,res)=>{
//         res.send("create user");
// });
// app.patch("/users",(req,res)=>{
//         res.send("update user");
// });
// app.delete("/users",(req,res)=>{
//             res.send("no users");
// });




//reviews

// app.get("/reviews",(req,res)=>{
//         res.send("hello");
// });
// app.post("/users",(req,res)=>{
//   res.send("create user");
// });
// app.patch("/users",(req,res)=>{
//         res.send("update user");
// });
// app.delete("/users",(req,res)=>{
//         res.send("no users");
// });


//cart
// app.get("/cards",(req,res)=>{
//         res.send("hello");
// });
// app.post("/users",(req,res)=>{
//         res.send("create user");
// });
// app.patch("/users",(req,res)=>{
//         res.send("update user");
// });
// app.delete("/users",(req,res)=>{
//         res.send("no users");
// });



app.listen(3000,()=>{
console.log("server is running");
});