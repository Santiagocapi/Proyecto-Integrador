const express = require("express");
const { conectarBaseDeDatos } = require("./db/db_conection");
const { ObjectId } = require("mongodb")
const ejs = require("ejs");
const path = require("path");

const app = express();

// Establecer ejs como motor de plantillas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use('/static', express.static(path.join(__dirname, 'static')));

app.get("/index", async (req, res) => {
  try {

    const eventosCollection = await conectarBaseDeDatos();
    const eventos = await eventosCollection.find({}).toArray();

    // Renderizar la vista 'index.ejs' con los datos de los eventos
    res.render("index", { eventos });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Ocurrió un error en el servidor." });
  }
});

// Ruta para mostrar un evento
app.get("/eventos/:id", async (req, res) => {
  // Obtener el ID del evento desde la URL
  const eventoId = req.params.id;

  try {
    const eventosCollection = await conectarBaseDeDatos();
    const objectId = new ObjectId(eventoId);
    const evento = await eventosCollection.findOne({ _id: objectId });

    res.render("event", { evento });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Ocurrió un error en el servidor (Informacion del Evento)"});
  }
});

app.get("/evento/:id/tickets", async (req, res) => {
  const eventoId = req.params.id;

  try {
    const eventosCollection = await conectarBaseDeDatos();
    const objectId = new ObjectId(eventoId);
    const evento = await eventosCollection.findOne({ _id: objectId });

    res.render("tickets", { evento });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      message: "Ocurrió un error en el servidor (Compra de Entradas)",
    });
  }
});

app.get("/evento/:id/compra", async (req, res) => {
  const eventoId = req.params.id;

  try {
      const eventosCollection = await conectarBaseDeDatos();
      const objectId = new ObjectId(eventoId);
      const evento = await eventosCollection.findOne({ _id: objectId });
    
      res.render("buy", { evento });
  } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
          message: "Ocurrió un error en el servidor (Compra de Entradas)",
      });
  }
});



module.exports = app;

// Leer y imprimir la base de datos en el frontend
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
