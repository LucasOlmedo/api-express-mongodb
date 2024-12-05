const express = require('express');

const router = express.Router();

router.get('/orm', async (req, res) => {
    res.status(200).send('ORM Routes');
});

module.exports = router;