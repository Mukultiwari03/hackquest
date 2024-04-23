// auth check krne ke lie ek middleware, isStudent,isAdmin

const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req,res,next)=>{
    try{
        // extract jwt token
        // pending:other ways to fetch token
        console.log("cookie",req,cookies.token);
        console.log("body",req.body.token);
        console.log("header",req.header);
        console.log("req",req);
        const token = req.cookies.token ||  req.body.token || req.header("Authorization").replace("Bearer ", "");

        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token is missing"
            });
        }

        // verify the token
        // jwt.verify() takes two arguments 1. token 2. secret key
        // 3.returns payload if the decoding is done and it matches the secret key 
//         jwt.verify is a function typically used in libraries for working with JSON Web Tokens (JWTs), which are a compact and self-contained way for securely transmitting information between parties as a JSON object. When you call jwt.verify, you're asking the library to validate the authenticity of a given JWT.

// Here's how jwt.verify typically works:

// Input Parameters: The function usually takes three parameters:
// The JWT to be verified
// A secret key (or public key) used to verify the signature of the JWT
// Optionally, a set of options or callback function for handling the verification process
// Decoding the JWT: The first step is to decode the JWT. This process involves splitting the token into its three parts (header, payload, signature) and base64-decoding each part to extract the JSON data.
// Verifying the Signature: The library then uses the provided secret key (or public key, depending on the algorithm used) to verify the signature. This step ensures that the JWT has not been tampered with and was indeed signed by the party holding the secret key.
// Payload Verification (Optional): After verifying the signature, the library may optionally perform additional checks on the payload of the JWT. These checks could include verifying the expiration time (exp claim), ensuring the token is intended for the correct audience (aud claim), or validating other custom claims.
// Output: If all the verification steps pass successfully, the function typically returns the decoded payload of the JWT, which contains the information originally encoded within the token. Otherwise, it may throw an error indicating that the token is invalid or has failed verification.

        try{
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            console.log(payload);

            req.user = payload;

        }catch(err){
            return res.status(401).json({
                success:false,
                message:"token is invalid"
            })
        }
        next();

    } catch(error){
        return res.status(401).json({
            success:false,
            message:"Something went wrong while verifying the token",
        });
    }
}


exports.isStudent = (req,res,next)=>{
    try{
        if(req.user.role !=="Student"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for students"
            })
        }
        next();
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"User Role is not matching"
        })
    }
}

exports.isAdmin = (req,res,next)=>{
    try{
        if(req.user.role !=="Admin"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for admin"
            })
        
        }
        next();
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"User Role is not matching",
        })
    }
}