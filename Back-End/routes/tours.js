import express from 'express'
import { deleteTour, getSingleTour, createTour,updateTour,getAllTour,getTourBySearch,getFeaturedTour,getTourCount} from '../controllers/tourcontroller.js'

const router = express.Router()

//create new tour
router.post("/", createTour);
//update tour
router.put("/:id", updateTour);
//delete tour
router.delete("/:id", deleteTour);
//getSingle tour
router.get("/:id", getSingleTour);
//getAll tour
router.get("/", getAllTour);
//get tour by search
router.get("/search/getTourbySearch", getTourBySearch);

//get tour by search
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

export default router;