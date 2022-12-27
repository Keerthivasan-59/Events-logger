import express from "express";
import { createPost, deletePost, getPosts, likePost, updatePost } from "../controllers/posts.js";
import { verifyJWT } from "../middlewares/verifyJWT.js";

const router=express.Router()

router.get('/',getPosts)
router.post('/',verifyJWT,createPost)
router.patch('/:id',verifyJWT,updatePost)
router.delete('/:id',verifyJWT,deletePost)
router.patch('/:id/likePost',verifyJWT,likePost)
export default router