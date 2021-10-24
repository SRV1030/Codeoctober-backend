const mongoose = require("mongoose");

const resourceSchema = new mongoose.Schema({
    createdBy:{
        type:mongoose.Type.ObjectId,
        ref:"User"
    },
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
        default:0
    },
    review :[{
        type:mongoose.Type.ObjectId,
        ref:"Review"
    }],
    articles: [{String}],
    visibility: Boolean,
	Domain: [{String}],

});


const Resource = mongoose.model("Resource", resourceSchema);
module.exports = Resource;