// const NotesModel=require("../models/notes")


class ResourceService {
    constructor({ resourceModel}) {
        this._Resource = resourceModel;
    }
    async getAllResourcesUser(userId) {
        try {
            const resources =await this._Resource.find({createdBy:userId}).populate("createdBy");
            return resources
        } catch (error) {
            console.error(error);
            throw new Error(error.message)
        }
    }
    async getAllPublicResources() {
        try {
            const resources =await this._Resource.find({visibility:true}).populate("createdBy");;
            return resources
        } catch (error) {
            console.error(error);
            throw new Error(error.message)
        }
    }
    async getOneResourcesUser(reSrc) {
        try {
            const resources =await this._Resource.findById(reSrc).populate("createdBy");
            return resources
        } catch (error) {
            console.error(error);
            throw new Error(error.message)
        }
    }

    // post 
    async addResources(userId,title,links,articles,visibility,Domain) {
        try {
            const reSrc= await  this._Resource.create({
                createdBy:userId,
                title,
                links,
                articles,
                Domain,
                visibility
            })
            return reSrc;

        } catch (error) {
            console.error(error);
            throw new Error(error.message)
        }
    }
    
    // async addNotes(userId,reSrc,Content) {
    //     try {
    //         const notes =await NotesModel.create({
    //             createdBy:userId,
    //             Content
    //         })
    //         console.log(notes,"notes")
            // const reSrc= await  this._Resource.findOneAndUpdate(reSrc,{
            //     $push: {
            //         Notes: {
            //             notes
            //         }
            //     }  
            // })
            // return reSrc;

    //     } catch (error) {
    //         console.error(error);
    //         throw new Error(error.message)
    //     }
    // }

    // delete
    async deleteResources(srcId,userId) {
        try {

            await this._Resource.findOneAndDelete({createdBy:userId,_id:srcId})
            return true;

        } catch (error) {
            console.error(error);
            throw new Error(error.message)
        }
    }

    
}

module.exports = ResourceService;