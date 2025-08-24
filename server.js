const express = require('express');
const cors = require('cors');
const email = require('./email');

const server = express();

server.use(cors());
server.use(express.json());
server.use('/email',email);

server.get('/',(req,res)=>{
  res.send("backend is working");
})

server.listen('5000',()=>{
  console.log(`server running at port 5000`);
})