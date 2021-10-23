const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
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


const User = mongoose.model("User", profileSchema);
module.exports = User;