const express = require('express');
const StudentController = require('../controllers/studentController.js');

const router = express.Router();

const controller = new StudentController();

router.get('/students', (req, res) => controller.getAll(req, res));
router.post('/students', (req, res) => controller.create(req, res));
router.get('/students/:id', (req, res) => controller.getById(req, res));
router.put('/students/:id', (req, res) => controller.update(req, res));
router.delete('/students/:id', (req, res) => controller.delete(req, res));

module.exports = router;