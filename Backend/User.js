const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        
        email: {
            type: String,
            required: true
        },
        
        password: {
            type: String,
            required: true,
            unique: true
        }
    },

    {
        timestamps: true
    }
);

const user = mongoose.model('User_Detail', UserSchema);
module.exports = user;