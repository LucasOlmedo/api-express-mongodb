const Controller = require('./controller.js');
const CategoryService = require('../services/categoryService.js');

const service = new CategoryService();

class CategoryController extends Controller {

    constructor() {
        super(service);
    }
}

module.exports = CategoryController;