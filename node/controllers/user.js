const User = require('../models/User');
const jwt = require('jsonwebtoken');

const newUser = async (req, res) => {
  console.log("new user");
  console.log(req.body);

  try {
    const newUser = new User(req.body)
    const user = await newUser.save()
    console.log(user)
    res.status(200).json({
      massege: 'user created', newUser: user
    })
  }
  catch (err) {
    res.status(500).json({ massege: err.massege })
  }
}



const loginUser = async (req, res) => {
  console.log("login user");
  console.log(req.params);
  let user =await User.findOne({ name: req.params.name, mail: req.params.password });
  console.log(user);
  if (user) {

    const token = jwt.sign({ name: req.params.name, mail: req.params.mail }, process.env.SECRET);
    console.log(token);
    res.status(200).json({ "token": token, user: user });
  }
  else {
    res.status(500).json({ "error": error });
  }
}

const getAllUsers =async (req, res) => {
  try{    console.log("Aaaaaaaa");

    
    let users=await User.find();
    console.log("Aaaaaaaa");
    if(users)
        res.status(200).json({myUsers:users});
    else
     res.status(500).json({message:"dont have users"});
}
catch(err){
    res.status(500).json({"error":err});
}
}

module.exports = { newUser, getAllUsers, loginUser }