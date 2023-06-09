const express = require('express');
const app = express();
const path = require('path');

//ROUTES
app.use(require('./routes/routes'));
// STATIC FILES
app.use(express.static(path.join(__dirname,'../public')));

app.use((req, res) =>{
    res.sendFile(path.join(__dirname,'../public/index.html'));
})

//CONECTION
const port = 3000
app.listen(port, () =>{
    console.log('Servidor a la espera de conexion')
}) 