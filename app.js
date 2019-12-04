//Require necessary dependencies
const express = require('express');

//Create express app
const app = express();

//Set static assets
app.use('/static', express.static('public'))

//View engine setup
app.set('view engine', 'pug');

//Let app access routes
const mainRoutes = require('./routes');
const aboutRoutes = require('./routes/about');
const projectRoutes = require('./routes/projects');

//Create middleware
app.use(mainRoutes);
app.use('/about', aboutRoutes);
app.use('/projects', projectRoutes);

//404 error handling
app.use((req, res, next) => {
  const err = new Error('404 Page Not Found!');
  err.status = 404;
  console.log("404 error, page not found");
  next(err);
})

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

// Turn on Express server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
  })