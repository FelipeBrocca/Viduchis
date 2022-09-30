import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
    name: String,
    lastname: String,
    email: String,
    password: String,
    getOffers: Boolean,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Users = mongoose.model('Users', usersSchema);

export default Users;