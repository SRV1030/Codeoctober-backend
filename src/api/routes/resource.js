const express =require('express');
const resourceController = require('../contollers/resource');
const auth=require("../middleware/auth");
const router = express.Router();

//post 
router.post("/add", auth, resourceController.addResources);

//get 
router.get("/all", auth, resourceController.getAllPublicResources);
router.get("/my", auth, resourceController.getAllResourcesUser);
router.get("/one/:reSrc", auth, resourceController.getOneResourcesUser);

// delete 
router.delete("/:srcId", auth, resourceController.deleteResources);
module.exports=router;
