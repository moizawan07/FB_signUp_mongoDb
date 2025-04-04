const bcrypt = require('bcrypt')
const signupModel = require('../models/su.Model')

const signUp = async (req, res) => {
    console.log('controlller ma');
    
  let {userName, userEmail, userPassword, userAge} = req.body

  console.log('age type', typeof userAge);
  
  
  try {
     
    let passSalt = await bcrypt.genSalt(10)
     let hashPass = await bcrypt.hash(userPassword, passSalt)   

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