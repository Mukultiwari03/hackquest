const Status = require("../models/status");
const Student = require("../models/Student");

exports.status = async (req,res,next)=>{
    try{
          const { name , semester, roomNumber, personalContact, parentsContact, purpose, place, inDateTime, outDateTime,status} = req.body;
          const state = await Status.create({
              name, semester, roomNumber, personalContact, parentsContact, purpose, place, inDateTime, outDateTime, status
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


// exports.deleteObject = async (req, res) => {
//     try {
//         const { objectNeeded } = req.body;
//         console.log(objectNeeded)
//         await Student.deleteOne({ name: objectNeeded.name });
//         res.status(200).json({ message: 'Object deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Error deleting object' });
//     }
// }

 