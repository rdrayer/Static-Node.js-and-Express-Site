const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

//Routes
router.get('/', (req, res) => {
    // Log statement to indicate that this function is running
    res.render('index', { projects });
    //console.log(projects[0].project_name);
}); 

router.get('/projects/:id', function(req, res, next) {
    const profileId = req.params.id;
    const proj = projects.find( ({ id }) => id === +profileId );
    //console.log(proj);
    if (proj) {
      // 2. Pass the recipe data to the 'recipe' template
      res.render('project', { proj });
    } else {
      console.log("ooopies");
      res.sendStatus(404);
    }
  });

module.exports = router;