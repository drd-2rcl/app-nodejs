const express = require('express');

const server = express();

server.get('/teste', (req, res) => {
  return res.json({ message: 'First route' });
})

server.listen(3000);