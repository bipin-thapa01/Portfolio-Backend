const express = require('express');
const nodemailer = require('nodemailer');
require("dotenv").config();

const email = express.Router();

email.post('/', async (req,res)=>{
  const data = req.body;
  let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
      user: process.env.smtpUser,
      pass: process.env.smtpPass,
    },
  });
  let mail = {
    from : process.env.smtpUser,
    to : process.env.smtpUser,
    subject: `Portfolio email by ${data.name}`,
    text: `Name: ${data.name}
    Email: ${data.email}
    Organization: ${data.org}
    Description: ${data.desc}`
  };

  transporter.sendMail(mail,(error,info)=>{
    if(error){
      console.log(error)
    }
  })
  res.send({ok:"ok"})
});

module.exports = email;