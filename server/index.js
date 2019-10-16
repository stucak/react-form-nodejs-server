var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);
    
    next();
});
app.use(express.json());
app.get('/', (req, res) => res.send('Wellcome to the server'))
//POST request handling route
app.post('/upload', function(req, res){

  const fs = require('fs');

  let firstName = req.body.fName;
  let lastName = req.body.lName;
  let address = req.body.adr;
  let phone = req.body.phn;
  let email = req.body.em;
  let checked = req.body.isCh;

  console.log("Data saved!");

  var data = "First name: " + firstName + "\n" + "Last name: " + lastName + "\n" + "Address: " + address + "\n" + "Phone: " + phone + "\n" + "E-mail: " + email + "\n" + "Checked?: " + checked;

  fs.writeFile('form_data.txt', data, (err) => {
    if(err) throw err;
  })
  res.send("Data transfer successful");
});

var server = app.listen(4000, function(){
  console.log('Server listening on port 4000');
});
