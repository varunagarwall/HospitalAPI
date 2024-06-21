const Patient = require('../model/patient');

module.exports.registerPatient = async function (req, res) {

    try {
        console.log(req.body)
        req.body.doctor = '665564fce818093849078e07';
        let patient = await Patient.create(req.body);
        res.status(201).json({
            success: true,
            message: 'Patient registered successfully',
            data :patient,
        })
    }
    catch (err) {
        console.log('******', err);

        return res.status(500).json({
            message: "Internal Server Error"
        });

    }
}

module.exports.createReport = async function(req,res){
try {
   let patient = await Patient.findById(req.params.id);

  req.body.date = Date.now();
patient.reports.push(req.body);

patient.save();

res.status(201).json({
    success: true,
    message: 'report created successfully',
    data :patient,
})

} catch (err) {
    console.log('******', err);

    return res.status(500).json({
        message: "Internal Server Error"
    });

}

}

module.exports.allreport = async function(req,res){
    try {
        let patient = await Patient.findById(req.params.id)
        res.status(201).json({
            success: true,
            report: patient.reports
        }) 
        
    } catch (error) {
        console.log('******', err);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}



module.exports.status = async function(req,res){
    try {
        let patient = await Patient.find({
            reports : {$elemMatch : { status : req.params.status}}
        });

        res.status(201).json({
            success: true,
            data: patient
        }) 
        
    } catch (error) {
        console.log('******', err);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}