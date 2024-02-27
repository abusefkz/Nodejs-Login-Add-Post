
module.exports =async (req,res,next) => {
  
  const user =await req.session.userID;

  if(user){
   return res.redirect('/')
  }
  next();
}