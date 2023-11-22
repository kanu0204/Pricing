const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
     },
     plan: {
        type: String,
        enum: ['Basic', 'Standard', 'Extended'],
        required: true,
        unique: true,
     },
});
export const UserModel = mongoose.model("usersData", UserSchema);
