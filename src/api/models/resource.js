const mongoose = require("mongoose");
const review_model =require("./review")
const resourceSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    links: [
        {
            url:{
                type: String,
            },
            doc_type:{
                type: String,
            }
        }
    ],
    overallRating: {
        type: Number,
    },
    review :  review_model,
    articles: [{String}],
    visibility: Boolean,
	Domain: [{String}],

});


const Resource = mongoose.model("Resource", resourceSchema);
module.exports = Resource;