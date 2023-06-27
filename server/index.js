const path = require('path')
const express = require('express')
const transporter = require('./config')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

const buildPath = path.join(__dirname,'..','build')

app.use(express.json());
app.use(express.static(buildPath));

app.post('/sendhiimail',(req,res)=>{
    try{
        // console.log(req.body.Email)
        const mailOpt = {
            from : req.body.Email,
            to: 'yaswanth9802@gmail.com',
            html:`
                <p>You have a new Message</p>
                <h3>Contact Details</h3>
                <ul>
                    <li>Email: ${req.body.Email}</li>
                    <li>Message: Hii</li>
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
        console.log('catch',error)
        res.status(500).send({
            success: false,
            message: 'Something went wrong. Try again later'
        })
    }
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
            html:`
                <p>You have a new Message</p>
                <h3>Contact Details</h3>
                <ul>
                    <li>Enail: ${req.body.Email}</li>
                    <li>Name: ${req.body.name}</li>
                    <li>Subject: ${req.body.subject}</li>
                    <li>Message:${req.body.message}</li>
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
        console.log('catch',error)
        res.status(500).send({
            success: false,
            message: 'Something went wrong. Try again later'
        })
    }
})




app.listen(3030,()=>{
    console.log('server starts on port 3030')
})