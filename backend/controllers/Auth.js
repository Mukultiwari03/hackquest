// Cookies---> cookies are small pieces of data that are stored in the browser of the user. Cookies ka use krke tumhari login information save rahati hai... basically token save hota hai cookies me..us token me tumhari {header, payload and signature(basically a key or password)} save hota hai encpted format me.... cookies ka use krke tumari shopping cart me kya pada hai save rahata hai....cookies ka use krek tumhari preferences kya hai vo sb store rahati hai.


const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// signup route handler
exports.signup = async (req, res)=>{
    try{
        // get data 
        const {name,email,password,role} = req.body;
        console.log(req.body);
        
        // check if user already exists
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exists",
            });
        }

        //secure passowrd
        let hashedPassword;
        try{
        // hash function take two arguments 1.jise tum hash krna  chahate ho vo value 2.kitne no. of rounds me hash krna chahate ho
            hashedPassword = await bcrypt.hash(password,10);
        }
        catch(err){
            return res.status(400).json({
                success:false,
                message:"Error in hashing password"
            })
        }

        // create entry for User
        const user = await User.create({
            name,email,password:hashedPassword,role 
        })

        return res.status(200).json({
            success:true,
            message:"User created successfully",
        });
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            success:false,
            message:"Internal server error, User cannot be registered, please try again later. "

        })
    }
}



// login 
exports.login = async (req,res)=>{
    try{
        const {email,password} = req.body;
        // validation on email and password
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Please fill all the details carefully",
            });
        }

        // database me user vo exist krta hai ki nhi
        let user = await User.findOne({email})
        // if not a registered user
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User is not registered",
            })
        }

        const payload = {
            email:user.email,
            id:user._id,
            role:user.role, 
         }
        // verify password & generate a JWT token
        if(await bcrypt.compare(password,user.password)){
            // password match then user ko login krvana.. niche vale code se hum ek token create kr skte hai
            let token = jwt.sign(payload,
                                process.env.JWT_SECRET,
                                {
                                    expiresIn:"2h",
                                }
                                  )
            // send token to user
            user = user.toObject();   
            user.token = token;
            user.password = undefined;
        // httoOnly: true means cookie is only accessible by the server cannot be accessed by client side javascript
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly:true,
            }
        // cookie me teen chize jati hai
        // 1. cookie ka name
        // 2. cookie ka data 
        // 3. kuch options 
            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:"User Logged in successfully",
            })
        }
        else{
            // password do not match
            return res.status(403).json({
                success:false,
                message:"Password is incorrect",
            })
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Login Failure"
        });
    }
}

// login flow till now 
// 1) email/password fetch from req body
// 2) validation --> email/password khi empty to nhi hai vo check kia 
// 3) agar email/password fill kra hai to kya vo entry database me hai ya nhi vo check kia 
// 4) agar entry nhi hai to error
// 5) agar entry hai to password match kia
// 6) password matched---> no---> error
//                   ----> yes--->jwt token create--> using sign function of jwt 
//                            --> user.token = token.... ese se user object me token ki entry create krke uski value daal di
//                            ---> user.password = undefined... password hide kia object me se coz agar ase hi obj bhejega to usme password bhi jaa raha jisse hacker ko access mil jaega email/ password
//                            ---> res.cookie().... cookie me token save kr diya


// eske baad middleware bnana hai jo ye token verify krega ki vo valid hai ya nhi