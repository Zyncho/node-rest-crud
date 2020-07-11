// requerimos los modulos instalados
const express = require('express');
const server = express();
const path = require('path');


// use src folder to display HTML
server.use(
  express.static(
    path.join(__dirname,'src')
  )
);

// Listen to .env port or 3000
server.listen(process.env.PORT || 3000, console.log("Server Runnning!"));
