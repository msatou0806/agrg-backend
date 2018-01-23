
const express = require('express')
const app = express()
const port = 8080

app.get('/search/', function (req, res) {
  let data = {
    port: port,
    hello: 'world'
  }
  console.log(req)
  res.json(req.query);
})

app.listen(port, () => {
  console.log('Express is started on port ' + port)
})