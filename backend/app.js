var express = require('express');
var app = express();
app.get('/api', function(req, res){
   res.send("Hello from Myself!");
});
app.get('/', function(req, res){
   res.send("Hello World!");
});
app.listen(8080, "localhost", () => {
  console.log('App listening on port 8080!');
});


