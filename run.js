const app = require('./app/app');
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});