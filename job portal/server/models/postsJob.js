import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    creator: String,
    title : String,
    description : String,
    pro : String,
    status : String,
    location : String,
    selectedFile : String,
    applications:[{
        email: String,
        name: String,
        contact:String,
        rollnumber : String,
        percentage10 : String,
        percentage12 : String,
        percentageGrad : String, 
        techinaclSkill: String, 
        selectedFile : String,
    }],
    createdAt : {
        type: Date,
        default: new Date()
    },
});

const postsJob = mongoose.model('postsJob',postSchema);

export default postsJob;
