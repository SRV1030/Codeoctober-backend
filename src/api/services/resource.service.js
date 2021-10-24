

class ResourceService {
    constructor({ resourceModel}) {
        this._Resource = resourceModel;
    }
    async getAllResourcesUser(userId) {
        try {
            const resources =await this._Resource.find({createdBy:userId});
            return resources
        } catch (error) {
            console.error(error);
            throw new Error(error.message)
        }
    }
    async getAllPublicResources() {
        try {
            const resources =await this._Resource.find({visibility:true});
            return resources
        } catch (error) {
            console.error(error);
            throw new Error(error.message)
        }
    }
    async getOneResourcesUser(reSrc) {
        try {
            const resources =await this._Resource.findById(reSrc).populate("review");
            return resources
        } catch (error) {
            console.error(error);
            throw new Error(error.message)
        }
    }
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
    
    async deleteResources(srcId) {
        try {

            await this._Resource.findByIdAndDelete(srcId)
            return true;

        } catch (error) {
            console.error(error);
            throw new Error(error.message)
        }
    }

    
}

module.exports = ResourceService;