/**
 * Created by serj on 7/3/17.
 */
'use strict';

import mongoose from 'mongoose';

import '../models/User';

const User = mongoose.model('User');

export function setUpConnection() {
    mongoose.connect(`mongodb://localhost:27017/reduxcalendar`,{
        useMongoClient: true,
    }).catch(res => console.log(res));
}

export function createUser(data){
    let {username, password} = data;
    const user = new User(
        {
            username,
            password,
            createdAt:new Date()
        }
    );
    return user.save();
}

export function listUsers(){
    return User.find();
}

export function deleteUser(id) {
    return User.findOne({ _id: id }).remove().catch((err)=>console.log(err));
}

export function login(auth) {
    console.log(auth);
    return User.findOne(auth).catch((err)=>console.log(err));
}