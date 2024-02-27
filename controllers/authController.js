const User = require("../models/User");
const Category = require('../models/Categories')
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  try {
    const users = await User.create(req.body);

    res.status(201).redirect('/login');
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const {email,password} = req.body;

   const user = await User.findOne({email});
    if(user){
     bcrypt.compare(password, user.password, (err,same) => {
      if(same){
        req.session.userID = user._id;
        res.status(200).redirect('/users/dashboard')
      }
      else{
        res.status(400).send("HATALI GİRİŞ")
      }
     })
    }
    

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.logoutUser = (req,res) => {
  
  req.session.destroy(() => {
    res.redirect('/')
  })
}

exports.dashboardPage = async (req,res) => {

  const user = await User.findOne({_id: req.session.userID});
  const categories = await Category.find();

  res.status(200).render('dashboard', {
    page_name: 'dashboard',
    user,
    categories
  })
}