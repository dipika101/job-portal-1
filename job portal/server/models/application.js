import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    postId:{type: String, require: true},
    name: {type: String, require: true},
    rollnumber : {type: String, require: true},
    percentage10 : {type: String, reqire: true},
    percentage12 : {type: String, require: true},
    percentageGrad : {type: String, require: true},
    techinaclSkill: {type: [String], require: true},
    selectedFile : {type: String, require: true},
    id:{type: String},
    createdAt : {
        type: Date,
        default: new Date()
    },
});

const application = mongoose.model('application',postSchema);

export default application;