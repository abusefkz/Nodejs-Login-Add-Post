const express = require("express");
const mongoose = require("mongoose");
var session = require('express-session')

const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");
const categoryRouter = require("./routes/categoryRouter");
const userRouter = require("./routes/userRouter");

const app = express();

mongoose.connect("mongodb://localhost/newProject");

//Template Engine
app.set("view engine", "ejs");

//Global Veriable

global.userIn = null;

//MİDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))
app.use('*', (req,res,next) => {
  userIn = req.session.userID;
  next()
})

app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", categoryRouter);
app.use("/users", userRouter);

const port = 3000;

app.listen(port, (req, res) => {
  console.log(`${port} numaralı Porta Giriş Yaptınız...`);
});
