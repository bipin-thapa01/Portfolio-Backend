const express = require('express');
const cors = require('cors');
const email = require('./email');

const server = express();

server.use(cors());
server.use(express.json());
server.use('/email',email);

server.listen('1111',()=>{
  console.log(`server running at port 11111`);
})