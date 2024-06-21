const Doctor = require('../model/doctor');
const jwt= require('jsonwebtoken');



module.exports.createSession = async function (req, res) {
    try {
        let user =await Doctor.find(req.body);
    
    
    return res.status(200).json({
        message: "Signed In Successfully",
        data :{
            token: jwt.sign(user.toJSON(), 'codeial', {expiresIn: '100000'})
        }
    })
    }
     catch (err) {
        console.log('******',err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
    
    }
module.exports.registerDoctor = async function (req, res) {

    try {
      let doctor =await Doctor.create(req.body) 
        res.status(201).json({
            success: true,
            message: 'Doctor registered successfully',
            data :doctor,
        })
    }
    catch (err) {
        console.log('******', err);

        return res.status(500).json({
            message: "Internal Server Error"
        });

    }
}