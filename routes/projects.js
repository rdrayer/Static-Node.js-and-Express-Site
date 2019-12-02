const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

router.get('/', (req, res) => {
    res.render('project', { projects });
}); 

router.get('/projects/:id', function(req, res, next) {
    const profileId = req.params.id;
    const proj = projects.find( ({ id }) => id === +profileId );
    //console.log(proj);
    if (proj) {
      // 2. Pass the recipe data to the 'recipe' template
      res.render('project', { proj });
    } else {
      console.log('404err');//res.sendStatus(404);
    }
  });

module.exports = router;