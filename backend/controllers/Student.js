const Student = require("../models/Student");

exports.student = async (req,res)=>{
    try{
          const { name , semester, roomNumber, personalContact, parentsContact, purpose, place, inDateTime, outDateTime} = req.body;
          const student = await Student.create({
              name, semester, roomNumber, personalContact, parentsContact, purpose, place, inDateTime, outDateTime
          })
          return res.status(200).json({
                 success:true,
                 message:"Student created successfully",
          })
          
     
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Internal server error, User cannot be registered, please try again later. "
        })
    }
 }
 


  