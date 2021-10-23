const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    profileSchema: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    profileImage: {
        type: String,
        required: true,
    }
});


const User = mongoose.model("User", userSchema);
module.exports = User;