const port_ = 8080;


const { response } = require('express');
const express = require('express');
const path = require('path');
const Datastore = require('nedb')
const database = new Datastore('users.db')
database.loadDatabase();

const app = express();
const port = process.env.PORT || port_;


app.listen(port);
console.log('Server started at http://localhost:' + port);

app.use(express.static('static/html'))
app.use(express.json({limit:'1mb'}))

// // // // // // GET CSS // // // // // //
app.get('/grid.css', function(req, res) {
    res.sendFile(path.join(__dirname, '/static/css/grid.css'));
  });
    // // // // // // POST HTML // // // // // //
app.post('/register', function(req, res) {
    console.log(req.body)
    let data = req.body
    
    database.findOne({mail:data.mail}, function (err, doc) {
        if(doc==null)
        {
        database.insert(data)
        res.json({status: 1})
        }
        res.json({status: 0})
    })
  });  
app.post('/login', function(req, res) {
    console.log(req.body)
    let data = req.body
    database.findOne({mail:data.mail, pass:data.pass}, function (err, doc) {
        if(doc==null)
        {
        res.json({status: 0})
        }
        res.json({status: 1})
    })
  });  

// // // // // // GET JS // // // // // //
app.get('/calc.js', function(req, res) {
    res.sendFile(path.join(__dirname, '/static/js/calc.js'));
  });

app.get('/controller.js', function(req, res) {
    res.sendFile(path.join(__dirname, '/static/js/controller.js'));
  });

app.get('/jquery.js', function(req, res) {
    res.sendFile(path.join(__dirname, '/static/js/jquery-1.6.1.js'));
  });
// // // // // // GET ICO // // // // // //
app.get('/calc.ico', function(req, res) {
    res.sendFile(path.join(__dirname, '/static/ico/calc.ico'));
  });
// // // // // //
