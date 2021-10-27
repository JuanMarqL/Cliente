const express = require('express');
const app = express();

const port = 8000;

app.listen(port, function(){
    console.log('Servidor desplegado en ' + port);
});

app.get('/' , function(peticion, respuesta) {
    respuesta.send('Hola Mundos');
});

app.get('/datos' , function(peticion, respuesta) {
    respuesta.send("<h1>Pequeño texto incrustado en la app</h1>");
});

app.get('/views' , function(peticion, respuesta) {
    respuesta.sendFile(__dirname + "/views/index.html");
});


