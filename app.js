const mysql = require('mysql');
const session = require('express-session');
var db = mysql.createConnection({ host: 'localhost',
    user: 'sqluser%', 
    password: 'Khaled99',
database:"todoapp"});


    db.connect(function (err) {
        if(err){
            console.log(err)
        }
        else{
            console.log("connection created with Mysql successfully");
        }
     });
var express = require("express");

var app = express();
app.set("view engine", "ejs");
var port = process.env.PORT || 3000;

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))


// http://localhost:3000/auth


app.get("/", function (req, res) {
  res.render("index");
});
app.get("/contact", function (req, res) {
  res.render("contact");
});
app.get("/about", function (req, res) {
  res.render("about");
});
app.get("/menu", function (req, res) {
  //res.render("menu");
  res.render("menu");
});
app.get("/login", function (req, res) {
  res.render("login");
});

db.query('select * from todoapp.menu',(err,res)=>{
  return console.log(res)
})

app.listen(port, function () {
  console.log("server is running on port" + port);
});
