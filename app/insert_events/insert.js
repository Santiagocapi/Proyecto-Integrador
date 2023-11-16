// Conexión a la base de datos
const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://scapitani:santi1234@cluster0.eyalsgt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Función para insertar eventos en la colección
async function insertarEventos() {
  try {
    await client.connect();
    const database = client.db("musicEvents");
    const eventosCollection = database.collection("Events");

    const eventos = [
      {
        nombreEvento: "Primavera Folk",
        fechaEvento: new Date("2023-10-15T15:00:00Z"),
        horarioEvento: "15:00 - 23:00",
        duracionEvento: "8 horas",
        imagenPortada:
          "https://www.entradaweb.com.ar/assets/cache/MDIA-803d7ef2.jpg",
        edadDisponible: "Mayores de 18 años",
        ubicacion: "Club Hìpico",
        ubicacionProvincia: "Mendoza",
        precioEntradaGeneral: 7000.0,
        precioEntradaExclusiva: 10000.0,
      },
      {
        nombreEvento: "Nirvana",
        fechaEvento: new Date("2023-09-02T21:00:00Z"),
        horarioEvento: "21:00 - 24:00",
        duracionEvento: "3 horas",
        imagenPortada:
          "https://www.entradaweb.com.ar/assets/cache/MDIA-36292c34.jpg",
        edadDisponible: "Mayores de 16 años",
        ubicacion: "Club Pedro Molina",
        ubicacionProvincia: "Mendoza",
        precioEntradaGeneral: 4000.0,
        precioEntradaExclusiva: 8000.0,
      },
      {
        nombreEvento: "Usted Señalemelo - Tripolar",
        fechaEvento: new Date("2023-10-25T21:00:00Z"),
        horarioEvento: "21:00 - 23:30",
        duracionEvento: "2.5 horas",
        imagenPortada:
          "https://media.infocielo.com/p/ddaa35ec3e316aee342c04e406e11976/adjuntos/299/imagenes/001/651/0001651402/887x0/smart/arte-tapa-del-ultimo-disco-usted-senalemelo-tripolar.jpg",
        edadDisponible: "Todas las Edades",
        ubicacion: "Luna Park",
        ubicacionProvincia: "Buenos Aires",
        precioEntradaGeneral: 8000.0,
        precioEntradaExclusiva: 15000.0,
      },
    ];

    const result = await eventosCollection.insertMany(eventos);
    console.log(`${result.insertedCount} eventos insertados.`);
  } finally {
    await client.close();
  }
}

// Llamar la funcion
insertarEventos();
