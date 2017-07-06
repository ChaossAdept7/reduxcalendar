/**
 * Created by serj on 7/5/17.
 */
import mongoose from "mongoose";

const Schema = mongoose.Schema;


const UserSchema = new Schema({
    username     : { type: String, required: true },
    password     : { type: String, required: true },
    createdAt : { type: Date }
});

export const User = mongoose.model('User', UserSchema);