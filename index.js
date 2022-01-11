const express = require('express');
const app = express();
const mongoose = require('mongoose');
const AppointmentModel = require('./models/Appointments');

const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://dbUser:4F_E$$4T.nLSneb@cluster0.99wh3.mongodb.net/uvi-health?retryWrites=true&w=majority")


app.get('/getAppointments',(req,res)=>{
    AppointmentModel.find({},(err,result)=>{
        if(err)
        return res.json(err)
        else
        return res.json(result)
    })
})

app.post('/addAppointment', async (req,res)=>{
    const appointment = req.body
    const newAppointment = new AppointmentModel(appointment)
    await newAppointment.save()
    res.json(appointment)
})

app.put('/editAppointment/:id', async (req,res)=>{
    const editedAppointment = req.body
    const appointment = await AppointmentModel.findByIdAndUpdate(req.params.id,{$set:editedAppointment,new:true});
    res.json(appointment)

    
})

app.listen(3001,()=>{
    console.log("Server connected successfully")
})