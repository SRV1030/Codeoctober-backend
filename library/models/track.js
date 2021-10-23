const mongoose = require("mongoose");
const review_model =require("./review");
const resources_model =require("./resource");

const trackSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
    resoources: resources_model,
    overallRating: {
        type: Number,
    },
    review :  review_model,
    visibility: Boolean,
	Domain: [{String}],
});


const Tracks = mongoose.model("Tracks", trackSchema);
module.exports =Tracks;



