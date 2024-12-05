const Service = require('./service.js');

class StudentService extends Service {

    constructor() {
        super('Student');
    }
}

module.exports = StudentService;