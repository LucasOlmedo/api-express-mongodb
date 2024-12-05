const Service = require('./service.js');

class CourseService extends Service {

    constructor() {
        super('Course');
    }
}

module.exports = CourseService;