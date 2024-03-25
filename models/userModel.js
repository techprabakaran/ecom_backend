const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        first_name : {
            type: String,
            required: true
        },
        last_name : {
            type: String,
            required: true
        },
        email : {
            type: String,
            required: true
        },
        contact : {
            type: Number,
            required: true
        },
        password : {
            type: String,
            required: true
        },
        deletedAt : {
            type: Date,
            default: null
        }
    },
    { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
