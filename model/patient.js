const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');


const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor'
  },
  reports: [
    {
    status: {
      type: String,
      enum: ['negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit']
    },
    date: {
      type: Date,
        }
  }
],
},
  { timestamps: true });



const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;