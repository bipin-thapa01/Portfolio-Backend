const express = require('express');
const cors = require('cors');
const email = require('./email');

const server = express();

server.use(cors());
server.use(express.json());
server.use('/email',email);

server.listen('1000',()=>{
  console.log(`server running at port 1000`);
})