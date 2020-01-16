const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const courses = [
    { id: 1, name: "Algorithms" },
    { id: 2, name: "Software Engineering" },
    { id: 3, name: PORT }
];

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get("/courses", function(req, res) {
    res.send(JSON.stringify(courses));
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
