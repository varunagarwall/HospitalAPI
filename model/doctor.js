const mongoose= require('mongoose');
const timestamps = require('mongoose-timestamp');


const doctorSchema = new mongoose.Schema ({
    name:{
        type:String,
        // required:true,
        unique:true, 
    },
    password: {
        type: String,
        // required:true,
        unique:true, 

    }
    
},{ timestamps: true }
);



const Doctor= mongoose.model('Doctor',doctorSchema);
module.exports=Doctor;