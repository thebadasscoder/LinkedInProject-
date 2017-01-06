const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const app = express();

require('./models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'theCat',
  resave: true,
  saveUninitialized: true,
}))

//Api route handler
app.use("/api",require("./api-router"));

//view route handler
app.get("/*", (req,res)=>{
	res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(8888, ()=>{
	console.log('listen to port 8888');
})

module.exports = app;