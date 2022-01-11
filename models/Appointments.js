const mongoose = require('mongoose');

//Appointment Schema
const AppointmentSchema = new mongoose.Schema({
    appointmentName:{
        type:String,
        required:true
    },
    personName:{
        type:String,
        required:true
    },
    appointmentType:{
        type:String,
        required:true
    },
    appointmentSlot:{
        type:String,
        required:true
    },
    isCompleted:{
        default:false
    }
})

//Appointment model
const AppointmentModel = mongoose.model("appointments",AppointmentSchema)
//Exporting model so that it can be used in the files
module.exports = AppointmentModel