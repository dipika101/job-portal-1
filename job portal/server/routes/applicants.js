import express from "express";
const router = express.Router();

import { signinapp, signupapp, applyPost } from "../controller/applicants.js";

router.post('/signinapp', signinapp);
router.post('/signupapp', signupapp);
router.post('/applyPost', applyPost);

export default router;