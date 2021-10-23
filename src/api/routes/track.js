const express =require('express');
const TrackController = require('../contollers/track');
const auth=require("../middleware/auth");
const router = express.Router();

router.get("/", auth, TrackController.getAllTracks);

module.exports=router;
