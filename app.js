//Require necessary dependencies
const express = require('express');
const app = express();

//View engine setup
app.set('view engine', 'pug');

//Routes
router.get('/', (req, res) => {
    // Log statement to indicate that this function is running
    console.log('Handling request to root or "home" route, "/"');
  });

// Turn on Express server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
  })