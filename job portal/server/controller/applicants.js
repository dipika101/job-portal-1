import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import Applicants from "../models/applicants.js";

const secret = 'text';

export const signupapp = async (req, res) => {
  const { rollnumber, password } = req.body;

  try {
    const oldApplicant = await Applicants.findOne({ rollnumber });

    if (!oldApplicant) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldApplicant.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ rollnumber: oldApplicant.rollnumber, id: oldApplicant._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldApplicant, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signinapp = async (req, res) => {
  const { rollnumber, password, firstName, lastName } = req.body;

  try {
    const oldApplicant = await Applicants.findOne({ rollnumber });

    if (oldApplicant) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await Applicants.create({ rollnumber: rollnumber, password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = jwt.sign( { rollnumber: result.rollnumber, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};

export const applyPost=async(req,res)=>{
  const {id} = req.params;
  const post = req.body;

  const newPost = new postsJob({...post, postId: id, createdAt: new Date().toISOString() }); 
  try {
      await newPost.save();  
      res.status(201).json(newPost);  
  } catch (error) {
      res.status(409).json({message: error.message});
  }
};