const Controller = require('./controller.js');
const CourseService = require('../services/courseService.js');

const service = new CourseService();

class CourseController extends Controller {

    constructor() {
        super(service);
    }
}

module.exports = CourseController;