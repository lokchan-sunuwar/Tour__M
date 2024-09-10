import Booking from '../models/Booking.js'
//create a new booking
export const createBooking = async(req,res)=>{
    const newBooking = new Booking(req.body)
    try {
      const savedBooking = await newBooking.save()
      res.status(200).json({success:true, message:'your tour is Booked', data:savedBooking})

    } catch (error) {
        res.status(500).json({success:true, message:'internal server error',});
  
    }
}
//get a single booking
export const getBooking = async (req,res)=>{
    const id = req.params.id
     try {
       const book = await Booking.findById (id);
       res.status(200).json({success:true, message:'successfull', data:book})

     } catch (error) {
        res.status(404).json({success:true, message:'sorry',})
 
     }
}
//get a All booking
export const getAllBooking = async (req,res)=>{
     try {
       const books = await Booking.find (id);
       res.status(200).json({success:true, message:'successfull', data:books})

     } catch (error) {
        res.status(500).json({success:true, message:'internal error',})
 
     }
}