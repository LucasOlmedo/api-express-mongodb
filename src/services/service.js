const Model = require('../models');

class Service {

    constructor(modelName) {
        this.modelName = modelName;
    }

    async getAll() {
        return await Model[this.modelName].findAll();
    }

    async getById(id) {
        return await Model[this.modelName].findByPk(id);
    }

    async create(data) {
        return await Model[this.modelName].create(data);
    }

    async update(data, id) {
        return await Model[this.modelName].update(data, {
            where: {
                id: id
            }
        });
    }

    async delete(id) {
        return await Model[this.modelName].destroy({
            where: {
                id: id
            }
        });
    }
}

module.exports = Service;