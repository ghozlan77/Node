const express=require("express");
const cartController=require('../controllers/userController')

const router=express.Router();



router.get("/",cartController.getCart);
router.post("/",cartController.createRCart);




module.exports=router;