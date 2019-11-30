const express = require('express');
const router = express.Router();

//Routes
router.get('/', (req, res) => {
    // Log statement to indicate that this function is running
    res.send('index');
}); 

module.exports = router;