import mongoose from 'mongoose';
import postsJob from '../models/postsJob.js';

export const getPosts=async(req,res)=>{
    const {page}=req.query;
    try {
        const LIMIT =8;
        const startIndex = (Number(page)-1) * LIMIT;
        const total = await postsJob.countDocuments({});
        const posts = await postsJob.find().sort({ _id: -1}).limit(LIMIT).skip(startIndex);
        res.status(200).json({data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getPostsBySearch = async (req, res) => {
    const { searchQuery } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");

        const posts = await postsJob.find({ title});

        res.json({ data: posts });
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;
    try {
        const post = await postsJob.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost=async(req,res)=>{
    const post = req.body;

    const newPost = new postsJob({...post, creator: req.userId, createdAt: new Date().toISOString() }); 
    try {
        await newPost.save();  
        res.status(201).json(newPost);  
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, description, creator, pro, status, location, selectedFile } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { title, creator, description, pro, status, location, selectedFile, _id: id };

    await postsJob.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async(req,res) =>{
    const { id }= req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await postsJob.findByIdAndDelete(id);

    res.json({message:"Post delete successfully"});
}


export const applicationPost = async(req, res)=>{
    const {id}= req.params;
    const { value } = req.body;

    const post = await postsJob.findById(id);

    post.applications.push({value});

    const updatedPost = await postsJob.findByIdAndUpdate(id, post, {new: ture});
    console.log(updatePost);
    res.json(updatedPost);
};

// export default router;