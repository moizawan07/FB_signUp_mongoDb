let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken')
const signupModel = require('../models/su.Model');

const login = async (req, res) => {
    let {userEmail, userPassword} = req.body
    console.log('controller ma', userEmail, userPassword);

 // 1: Check if the user email is registered
 // 2: Verify if the entered password matches the stored password

 try {
    let emailMatched = await signupModel.findOne({email : userEmail})
    console.log(emailMatched);

    if(!emailMatched){
        return res.status(404).json({serverMsg : 'This Email is not Register'})
    }
// if Email is Register Now Check Pass Match

let passwordMatched = await bcrypt.compare(userPassword,emailMatched.password)

if(!passwordMatched){
    return res.status(404).json({serverMsg : 'Password Not matched'})
}

// Email Or Password Ok Now Generate a JWT Token and Add In The Cookies



let token =  jwt.sign({
    userId :    emailMatched._id.toString(),   //  string form me id bhejna best practice hai by Default Type ObjId milti.
    userName :  emailMatched.name,
    userEmail : emailMatched.email,
    userAge :   emailMatched.age,
}, 
process.env.JWT_SECRET)

console.log('token', token);

    // Cookies Set 
 res.cookie("Token", token, {
     httpOnly: true,  // JavaScript se access nahi ho sakti
     sameSite: "Lax", // Same site ya trusted site se hi bheji jaayegi
     maxAge: 3600000  // 1 hour tak valid rahegi
 });

 res.status(200).json({serverMsg : 'SucessFully login'})
    
 } 
 catch (error) {
    res.status(500).json({serverMsg : error.message})
 }
  
    
}

module.exports = login