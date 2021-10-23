const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const profileModel = require("../models/profile");
const AuthService = require("../services/auth.service");
// const MailService = require("../services/vendor/MailService");

const authService = new AuthService({
    UserModel:profileModel,
    // MailService: new MailService(),
});

const taskController = {
    
    login: asyncHandler(async (req, res) => {
        const { email, password } = req.body;
        const { user, token } = await authService.login(email, password);
        res.status(200).json({ user, token });
    }),
}

module.exports=taskController;