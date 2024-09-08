import express from 'express'
import { createReview } from '../controllers/reviewsController'
const router = express.Router()

router.post('/:tourId', createReview )

export default router
