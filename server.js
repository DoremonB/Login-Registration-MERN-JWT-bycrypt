var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/User')
app.use('/users', Users)

mongoose.connect('mongodb+srv://'+'USERNAME:'+'PASSWORD'+'@node-rest-shop-qoquv.mongodb.net/'+'TABLENAME'+'?retryWrites=true&w=majority',{
    useNewUrlParser: true
})


app.listen(port, function() {
    console.log('Server is running on port: ' + port)
})