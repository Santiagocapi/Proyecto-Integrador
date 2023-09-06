const express = require('express');
const { MongoClient } = require('mongodb');
const ejs = require('ejs');

const app = express();
const port = 3000; // Puerto en el que se ejecutará el servidor

// URL de conexión a la base de datos
const uri = "mongodb+srv://scapitani:capi1234@cluster0.o3moaui.mongodb.net/?retryWrites=true&w=majority"; 

// Establecer ejs como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/eventos', async (req, res) => {
  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    const database = client.db('musicEvents');
    const eventosCollection = database.collection('Events');

    const eventos = await eventosCollection.find({}).toArray(); 
    
    // Renderizar la vista 'eventos.ejs' con los datos de los eventos
    res.render('eventos', { eventos });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Ocurrió un error en el servidor.' });
  } 
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});    


// LEER Y IMPRIMIR LA BASE DE DATOS EN EL FRONT
// app.get('/eventos', async (req, res) => {
//   try {
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     await client.connect();

//     const database = client.db('musicEvents');
//     const eventosCollection = database.collection('Events');

//     const eventos = await eventosCollection.find({}).toArray();
//     res.json(eventos);
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ message: 'Ocurrió un error en el servidor.' });
//   } finally {
//     client.close();
//   }
// });

// app.listen(port, () => {
//   console.log(`Servidor escuchando en el puerto ${port}`);
// });