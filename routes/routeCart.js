const express=require("express");
const cartController=require('../controllers/userController')

const router=express.Router();

//befor controller
router.get("/",(res,req)=>{
    res.send("hello")
});
router.post("/",(res,req)=>{
    res.send("create cart")
});
router.patch("/",(res,req)=>{
    res.send("update cart")
});
router.delete("/",(res,req)=>{
    res.send("no cart")
});


router.get("/",cartController.getCart);
router.post("/",cartController.createRCart);




module.exports=router;