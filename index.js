
const express = require('express')
const app = express()
const port = 8080

app.get('/', function (req, res) {
  let data = {
    port: port,
    hello: 'world'
  }
  //res.send('Hello World')
  res.json(data);
})
 
app.listen(port, () => {
  console.log('Express is started on port ' + port)
  
})