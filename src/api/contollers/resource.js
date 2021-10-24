const asyncHandler = require("express-async-handler");
const resourceModel = require("../models/resource");
const ResourceService = require("../services/resource.service");


const resourceService = new ResourceService({
  resourceModel: resourceModel,
});

const resourceController = {
  // post
  addResources: asyncHandler(async (req, res) => {
    const { title, links, articles, visibility, Domain } = req.body;
    const reSrc = await resourceService.addResources(
      req.user._id,
      title,
      links,
      articles,
      visibility,
      Domain
    );
    res.status(200).json({ message: "created successfully", data: reSrc });
  }),

  

  // get
  getAllResourcesUser: asyncHandler(async (req, res) => {
    const reSrc = await resourceService.getAllResourcesUser(req.user._id);
    res.status(200).json({ data: reSrc });
  }),
  getAllPublicResources: asyncHandler(async (req, res) => {
    const reSrc = await resourceService.getAllPublicResources();
    res.status(200).json({ data: reSrc });
  }),
  getOneResourcesUser: asyncHandler(async (req, res) => {
    const { reSrc } = req.params;
    const reSrcData = await resourceService.getOneResourcesUser(reSrc);
    res.status(200).json({ data: reSrcData });
  }),


  // delete
  deleteResources: asyncHandler(async (req, res) => {
    const { srcId } = req.params;
    const reSrc = await resourceService.deleteResources(req.user,srcId);
    res.status(200).json({ message: "Deleted  successfully", data: reSrc });
  }),
};

module.exports = resourceController;
