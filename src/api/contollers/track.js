const asyncHandler = require("express-async-handler");
const TrackSerice = require('../services/track.service');

const trackService = new TrackSerice();

const TrackController = {
    getAllTracks: asyncHandler(async (req, res) => {
        const tracks = await trackService.getAllTracks();
        res.json(tracks);
    }),
    // getTrackById: asyncHandler(async (req, res) => {
    //     const track = await trackService.getTrackById(req.params.id);
    //     res.json(track);
    // }),
}

module.exports = TrackController;