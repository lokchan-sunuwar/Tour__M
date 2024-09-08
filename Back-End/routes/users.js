import express from 'express'
import { updateUser,deleteUser,getSingleUser,getAllUser } from '../controllers/userController.js';
const router = express.Router()
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

router.put("/:id",verifyUser, updateUser);
//delete User
router.delete("/:id", verifyUser, deleteUser);
//getSingle User
router.get("/:id", verifyUser, getSingleUser);
//getAll User
router.get("/", verifyAdmin, getAllUser);




export default router