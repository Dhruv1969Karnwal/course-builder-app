class CrudRepository {
    constructor(model){
        this.model = model;
    }

    async create (data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud-repository");
            throw {error}
        }
    }
}

module.exports = {CrudRepository};