const express = require('express');
const CourseController = require('../controllers/courseController.js');

const router = express.Router();

const controller = new CourseController();

router.get('/courses', (req, res) => controller.getAll(req, res));
router.post('/courses', (req, res) => controller.create(req, res));
router.get('/courses/:id', (req, res) => controller.getById(req, res));
router.put('/courses/:id', (req, res) => controller.update(req, res));
router.delete('/courses/:id', (req, res) => controller.delete(req, res));

module.exports = router;