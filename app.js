const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.post('/devices', function (req, res) {
    var output = [
        {
            "device_id": "d0004"
        }
    ]
    res.send(output)
  })

  app.post('/history', function (req, res) {
    var output = [
        {
            "email": "kasuni@gmail.com",
            "used_day": "2020-12-31T18:30:00.000Z",
            "used_weight": 42
        },
        {
            "email": "kasuni@gmail.com",
            "used_day": "2021-01-01T18:30:00.000Z",
            "used_weight": 42
        }
    ]
    res.send(output)
  })

  app.post('/percentage', function (req, res) {
    var output = [
        {
            "balance_percentage": 10
        }
    ]
    res.send(output)
  })
 
app.listen(9000)