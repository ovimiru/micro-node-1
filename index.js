const express = require('express')
const path = require('path')
const axios = require('axios');
const PORT = process.env.PORT || 5000

let courses = [];

// console.log('here');

// Make a request for a user with a given ID
axios.get('https://micro-node-unitbv-2.herokuapp.com/courses')
    .then(function (response) {
        // handle success
        // console.log(response.data);
        courses = response.data;
    })
    .catch(function (error) {
        // handle error
        // console.log(error);
    })
    .finally(function () {
        // always executed
    });


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/courses', function(req, res) {
    res.send(JSON.stringify(courses));
      // res.render('pages/db', results );
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
