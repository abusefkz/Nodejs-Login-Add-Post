exports.indexPage = (req, res) => {
  console.log(req.session.userID)
  res.status(200).render("index", {
    
    page_name: "index",
  });
};

exports.aboutPage = (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
};

exports.registerPage = (req, res) => {
  res.status(200).render("register", {
    page_name: "register",
  });
};

exports.loginPage = (req, res) => {
  res.status(200).render("login", {
    page_name: "login",
  });
};


