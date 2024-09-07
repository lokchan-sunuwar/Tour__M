import User from '../models/User.js'

//create new db

export const createUser = async(req,res)=>{
    const newUser = new User(req.body)
    try{
        const savedUser= await newUser.save()
        res.status(200).json({success:true, message:'successfully created',data:savedUser})
    } catch(err){
        res.status(500).json({success:false, message:'unsuccessfull to created. try again',})

    }
}

//update User
export const updateUser= async(req,res)=>{
    const id=req.params.id

    try {

       const updatedUser = await User.findByIdAndUpdate(id,{
        $set:req.body
       },{new:true})

       res.status(200).json({success:true,message:'successfully updated',data:updatedUser})

    } catch (err) {
        res.status(500).json({success:false, message:'failed to updated'})

    }
}
//delete User
export const deleteUser= async(req,res)=>{
    const id=req.params.id

    try {

      await User.findByIdAndDelete(id);

       res.status(200).json({success:true, message:'successfully deleted'})

    } catch (err) {
        res.status(500).json({success:false, message:'unable to delete'})

    }
}
//getsingle User
export const getSingleUser= async(req,res)=>{
    const id=req.params.id

    try {

       const user = await User.findById(id)

       res.status(200).json({success:true, message:'successfully ',data:user})

    } catch (err) {
        res.status(404).json({success:false, message:'not found'})
}}
//getAll User
export const getAllUser= async(req,res)=>{

    try {
        const users = await User.find({})
        res.status(200).json({success:true,message:'successfully ',data:users})
    } catch (err) {
        res.status(404).json({success:false, message:'not found'}) 
    }
}

//get User by seaarch

export const getUserBySearch = async(req,res)=>{
    const city=new RegExp(req.query.city,'i')
    const distance=parseInt(req.query.distance)
    const maxGroupSize= parseInt(req.query.maxGroupSize)

    try {
        //gte=ggreater than equal
        const Users = await User.find({city,distance:{$gte:distance},maxGroupSize:{$gte:maxGroupSize}})

        res.status(200).json({success:true ,message:'successfully ',data:Users})
    } catch (error) {
        res.status(404).json({success:false, message:'not found'})
    }
}

//getFeature User
export const getFeaturedUser= async(req,res)=>{

    try {
        const featuredUser = await User.find({featured:true}).limit(8)
        res.status(200).json({success:true,message:'successfully ',data:featuredUser})
    } catch (err) {
        res.status(404).json({success:false, message:'failed to fetch'}) 
    }
}

//get tpour counts

export const getUserCount =async(req,res)=>{
    try {
        const UserCount=await User.estimatedDocumentCount()
        res.status(200).json({success:true ,data:UserCount})
    } catch (error) {
        res.status(500).json({success:false, message:'fail'})
    }
}
