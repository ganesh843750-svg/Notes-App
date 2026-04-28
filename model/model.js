import mongoose from "mongoose";

 const schema = mongoose.Schema({
        title : String,
        content : String
    });
const noteModel = mongoose.model('note',schema,'note');

export default noteModel;