class Controller {

    constructor(serviceEntity) {
        this.service = serviceEntity;
    }

    async getAll(req, res) {
        try {
            const data = await this.service.getAll();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getById(req, res) {
        try {
            const data = await this.service.getById(req.params.id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async create(req, res) {
        try {
            const data = await this.service.create(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const data = await this.service.update(req.params.id, req.body);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            await this.service.delete(req.params.id);
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = Controller;