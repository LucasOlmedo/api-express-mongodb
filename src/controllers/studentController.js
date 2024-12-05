const Controller = require('./controller.js');
const StudentService = require('../services/studentService.js');

const service = new StudentService();

class StudentController extends Controller {

    constructor() {
        super(service);
    }
}

module.exports = StudentController;