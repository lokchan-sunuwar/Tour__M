import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      ref: "Tour",
    },
    username: {
      type: String,
      required: true,
    },
    userEmail: {
        type:String,
    },
    tourName:{
        type:String,
        required:true,
    },
    fullName: {
      type: String,
      required: true,
    },
   guestSize : {
    type:Number,
    required: true,
   },
   phone : {
    type:Number,
    required: true,
   },
   bookingAt : {
    type:date,
    required: true,
   },
   
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
