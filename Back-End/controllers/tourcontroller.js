import Review from '../models/Review.js'
import Tour from '../models/Tour.js'

//create new db

export const createTour = async(req,res)=>{
    const newTour = new Tour(req.body)
    try{
        const savedTour= await newTour.save()
        res.status(200).json({success:true, message:'successfully created',data:savedTour})
    } catch(err){
        res.status(500).json({success:false, message:'unsuccessfull to created. try again',})

    }
}

//update tour
export const updateTour= async(req,res)=>{
    const id=req.params.id

    try {

       const updatedTour = await Tour.findByIdAndUpdate(id,{
        $set:req.body
       },{new:true})

       res.status(200).json({success:true,message:'successfully updated',data:updatedTour})

    } catch (err) {
        res.status(500).json({success:false, message:'failed to updated'})

    }
}
//delete tour
export const deleteTour= async(req,res)=>{
    const id=req.params.id

    try {

      await Tour.findByIdAndDelete(id);

       res.status(200).json({success:true, message:'successfully deleted'})

    } catch (err) {
        res.status(500).json({success:false, message:'unable to delete'})

    }
}
//getsingle tour
export const getSingleTour= async(req,res)=>{
    const id=req.params.id

    try {

       const tour = await Tour.findById(id).populate('reviews');

       res.status(200).json({success:true, message:'successfully ',data:tour})

    } catch (err) {
        res.status(404).json({success:false, message:'not found'})
}}
//getAll tour
export const getAllTour= async(req,res)=>{

    //for pagination
    const page=parseInt(req.query.page)
    try {
        const tours = await Tour.find({}).populate('reviews').skip(page*8).limit(8)
        res.status(200).json({success:true,count:tours.length ,message:'successfully ',data:tours})
    } catch (err) {
        res.status(404).json({success:false, message:'not found'}) 
    }
}

//get tour by seaarch

export const getTourBySearch = async(req,res)=>{
    const city=new RegExp(req.query.city,'i')
    const distance=parseInt(req.query.distance)
    const maxGroupSize= parseInt(req.query.maxGroupSize)

    try {
        //gte=ggreater than equal
        const tours = await Tour.find({city,distance:{$gte:distance},maxGroupSize:{$gte:maxGroupSize}}).populate('reviews')

        res.status(200).json({success:true ,message:'successfully ',data:tours})
    } catch (error) {
        res.status(404).json({success:false, message:'not found'})
    }
}

//getFeature tour
export const getFeaturedTour= async(req,res)=>{

    try {
        const featuredtour = await Tour.find({featured:true}).populate("reviews").limit(8)
        res.status(200).json({success:true,message:'successfully ',data:featuredtour})
    } catch (err) {
        res.status(404).json({success:false, message:'failed to fetch'}) 
    }
}

//get tpour counts

export const getTourCount =async(req,res)=>{
    try {
        const tourCount=await Tour.estimatedDocumentCount()
        res.status(200).json({success:true ,data:tourCount})
    } catch (error) {
        res.status(500).json({success:false, message:'fail'})
    }
}
