const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Log statement to indicate that this function is running
    res.send('project');
}); 

module.exports = router;