const express = require('express');
const CategoryController = require('../controllers/categoryController.js');

const router = express.Router();

const controller = new CategoryController();

router.get('/categories', (req, res) => controller.getAll(req, res));
router.post('/categories', (req, res) => controller.create(req, res));
router.get('/categories/:id', (req, res) => controller.getById(req, res));
router.put('/categories/:id', (req, res) => controller.update(req, res));
router.delete('/categories/:id', (req, res) => controller.delete(req, res));

module.exports = router;