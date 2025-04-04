const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const signupModel = require('../models/su.Model')

const signAuth = async (req, res, next) => {
    console.log('middllware ma');
    
    let { userEmail} = req.body

//     Check Current user Email Is Use Any Other user In the DATABASE 
//     if Yes So return the curr user and say change the email
//     if No So Add the user In the DATABASE

try {
    let emailIsUsed = await signupModel.findOne({email : userEmail})
    console.log('email is used', emailIsUsed);
    

        if(emailIsUsed){
            return res.status(409).json({serverMsg: 'Email already exists'})
        }

        next()
} 
catch (error) {
    console.log('middlware catched err', error);
}
}

module.exports = signAuth;