const express = require('express');
const path = require('path');
const axios = require('axios');
const PORT = process.env.PORT || 5000;

let courses = [];

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/students', function(req, res) {
    axios.get('https://micro-node-unitbv-2.herokuapp.com/users')
          .then(function (response) {
              // courses = response.data;
              results = response.data;
              // res.send(JSON.stringify(courses));
              res.render('pages/db', results );
          });
      // res.send(JSON.stringify(courses));
      // res.render('pages/db', results );
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
