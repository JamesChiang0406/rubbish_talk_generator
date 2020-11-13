// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const rtGenerator = require('./generator')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting route
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const choice = req.body
  const output = rtGenerator(choice)
  res.render('index', { output })
})

// starts the Express server and listen for connections
app.listen(port, () => {
  console.log(`Express app listening on port:${port}.`)
})