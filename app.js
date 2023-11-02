const express = require("express");
const {
  conectarBaseDeDatos,
  obtenerEventoPorId,
} = require("./app/db/db_conection");
const ejs = require("ejs");
const path = require("path");

const app = express();
const port = 3000;

// Establecer ejs como motor de plantillas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "app/views"));

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

// Ruta para mostrar un evento específico
app.get("/evento/:eventoId", async (req, res) => {
  const eventoId = req.params.id; // Obtener el ID del evento desde la URL

  try {
    // Buscar el evento por ID en la base de datos
    const evento = await obtenerEventoPorId(eventoId);
    // Regreso a index.ejs
    res.render("index.ejs", { evento });
    if (!evento) {
      return res.status(404).send("Evento no encontrado");
    }
  } catch (error) {
    console.error("Error al obtener el evento:", error);
    res.status(500).json({
      message: "Ocurrió un error en el servidor (Informacion del Evento)",
    });
  }
});

app.get("/evento/:id/tickets", async (req, res) => {
  const eventoId = req.params.id;

  try {
    const evento = await obtenerEventoPorId(eventoId);

    res.render("tickets", { evento });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      message: "Ocurrió un error en el servidor (Compra de Entradas)",
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

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
