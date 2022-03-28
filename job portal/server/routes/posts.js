import express from 'express';

import { getPosts, getPost, getPostsBySearch, createPost, applicationPost, updatePost, deletePost } from '../controller/posts.js';
import auth from '../middleware/auth.js';
import applicantAuth from '../middleware/applicantAuth.js';

const router = express.Router();

router.get('/', getPosts);
router.get('/search', getPostsBySearch);
router.get('/:id',getPost);
router.post('/',auth, createPost);
router.patch('/:id',auth, updatePost);
router.delete('/:id',auth, deletePost);
router.post('/:id/applicationPost',auth, applicationPost);

export default router;