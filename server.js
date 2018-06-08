// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
    // just for fun, take a look at the request and response objects
//    console.log("The request object", request);
//    console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
   response.send("<h1>Hello Express</h1>");
})

app.get('/index', function(request, response) {
  response.render("index");
})

app.get('/cats', function(request, response) {
  // console.log('Request: ', request);
  // console.log('Response: ', response);
  response.render('cats', {});
})

app.get('/cars', function(request, response) {
  response.render('cars', {});
})

app.get('/cars/new', function(request, response) {
  response.render('forms', {});
})

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})
