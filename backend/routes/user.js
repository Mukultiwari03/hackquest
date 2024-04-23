  const express = require("express");
  const router = express.Router();

  const User = require("../models/User");

  const {login,signup} = require("../controllers/Auth");
  const {auth,isStudent,isAdmin}= require("../middlewares/auth");

  router.post("/login",login);
  router.post("/signup",signup);

// testing protected routes for single middleware
router.get("/test", auth,(req,res)=>{
  res.json({
    success:true,
    message:"Welcome to the Protected route for Testing"
  })
})
// Protected Route
router.get("/student",auth,isStudent,(req,res)=>{
  res.json({
    success:true,
    message:"Welcome to the Protected route for Students"
  })
})

router.get("/admin",auth,isAdmin,(req,res)=>{
  res.json({
    success:true,
    message:"Welcome to the Protected route for Admin"
    })
  })

router.get("/getEmail",auth, async (req,res)=>{
  try{
    const id = req.user.id;
    const user = await User.findById(id);
    res.status(200).json({
      success:true,
      email:user,
      message:"Welcome to the email route"
    
    })
  }
  catch(error){
    res.status(500).json({
      success:false,
      email:error.message,
      message:"fatt gya code"
    
    })
  }

  // console.log("ID: ",id);
  // res.json({
  //   success:true,
  //   id:id,
  //   message:"Welcome to the Email Route",
  // })
})
  module.exports = router;