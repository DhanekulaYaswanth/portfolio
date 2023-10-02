const path = require('path')
const express = require('express')
const transporter = require('./config')
const dotenv = require('dotenv')
const cors = require('cors'); // Import the cors middleware

dotenv.config()

const app = express()

const buildPath = path.join(__dirname+"/public")

app.use(express.json());
app.use(express.static(buildPath));
app.use(cors({
    origin: 'https://dhanekulayaswanth.github.io/portfolio/',
    // You can add more options as needed
  }));


app.post('/sendhiimail',(req,res)=>{
    console.log(process.env.email);
    const mailOptions = {
        from: process.env.email,
        to:'yaswanth9802@gmail.com',
        subject:'From Portfolio',
        html:`
            <h1>Message: Hii</h1>
        `
    };

    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            res.status(500).send({
                success: false,
                message: 'Something went wrong. Try again later'
            })
        }else{
            res.send({
                success:true,
                message: 'Message Sent Successfully!'
            })
        }
    })
})





app.post('/sendcontactform',(req,res)=>{
    try{
        // console.log(req.body.Email)
        // console.log(req.body.name)
        // console.log(req.body.subject)
        // console.log(req.body.message)


        const mailOpt = {
            from : req.body.Email,
            to: 'yaswanth9802@gmail.com',
            subject:'From Portfolio',
            text:'sample text',
            html:`
                <p>You have a new Message</p>
                <h3>Contact Details</h3>
                <ul>
                    <li><b>Email</b>: ${req.body.Email}</li>
                    <li><b>Name</b>: ${req.body.name}</li>
                    <li><b>Subject</b>: ${req.body.subject}</li>
                    <li><b>Message</b>:${req.body.message}</li>
                </ul>
            `
        }

        transporter.sendMail(mailOpt,function(err,info){
            if(err){
                console.log('try',err)
                res.status(500).send({
                    success: false,
                    message: 'Something went wrong. Try again later'
                })
            } else{
                res.send({
                    success:true,
                    message: 'Message Sent Successfully!'
                })
            }
        })
    }
    catch(error){
        res.status(500).send({
            success: false,
            message: 'Something went wrong. Try again later'
        })
    }
})




app.listen(3030,()=>{
    console.log('server starts on port 3030')
})