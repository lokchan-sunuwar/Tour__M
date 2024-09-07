import express from 'express'
import { updateUser } from '../controllers/userController.js';
const router = express.Router()
router.put("/:id", updateUser);
//delete User
router.delete("/:id", deleteUser);
//getSingle User
router.get("/:id", getSingleUser);
//getAll User
router.get("/", getAllUser);



export default router