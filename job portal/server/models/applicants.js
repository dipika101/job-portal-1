import mongoose from "mongoose";

const userSchema= mongoose.Schema({
    name: { type: String, required:  true },
    rollnumber: {type: String, require: true},
    password: { type: String, required: true },
    id: { type: String },
});

const Applicants = mongoose.model('Applicants', userSchema);
export default Applicants;