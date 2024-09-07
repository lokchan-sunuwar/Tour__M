import User from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const register =async(req, res)=>{
    try {

        //hashing pass

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password,salt);

        const newUser =new User({
            username:req.body.userrname,
            email:req.body.email,
            password:hash,
            photo:req.body.photo
        })

        await newUser.save()
        res.status(200).json({success:true,message:'successfully created'})
    } catch (error) {
        res.status(500).json({success:false,message:'failed to  create Try again'})
    }
}
export const login =async(req, res)=>{
    const email = req.body.email;
    try {
        const user = await User.findOne({email})
//if not exist

if(!user){
    return res.status(404).json({success:false, message:'user not found'})
}
//if  exist and check password and mail 
const checkCorrectpassword = bcrypt.compare(req.body.password,user.password)


if(!checkCorrectpassword){
    return res.status(401).json({success:false,message:'incorrect email or password'})
}
const {password,role, ...rest}= user._doc

//create jwt
const token =jwt.sign({id:user._id,role:user.role,},process.env.JWT_SECRET_KEY,{expiresIn:"15d"});
        //set tooken in the browser cookies and send the res to the client
res.cookie('accessToken',token,{
    httpOnly:true,
    expires:token.expiresIn
}).status(200).json({success:true, message:"successfully login", data:{...rest} })
    } catch (error) {
          res.status(500).json({success:false,message:'failed to login'})
    }
}

//59:57
