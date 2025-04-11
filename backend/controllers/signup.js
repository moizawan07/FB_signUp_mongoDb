const bcrypt = require('bcrypt')
const signupModel = require('../models/su.Model')

const signUp = async (req, res) => {
    console.log('controlller ma');
    
  let {userName, userEmail, userPassword, userAge} = req.body
  
  try {
     
     let hashPass = await bcrypt.hash(userPassword, 10)
     console.log('hashpass', hashPass);
        

    let userRegister = await signupModel.create({
        name : userName,
        email : userEmail,
        password : hashPass,
        age : parseInt(userAge)
    })

    res.status(201).json({serverMsg: 'SignUp Sucessfully', user : userRegister})
     
  } 
  catch (error) {
    console.log('controller catched err', error);
  }
}

module.exports = signUp