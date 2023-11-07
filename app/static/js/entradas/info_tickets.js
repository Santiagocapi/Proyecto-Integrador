// document.addEventListener("DOMContentLoaded", function () {
//   const precioGeneral = "<%= evento.precioEntradaGeneral %>";
//   const precioVip = "<%= evento.precioEntradaExclusiva %>";
//   const infoEntrada = document.getElementById("info_entrada");
//   const precioEntrada = document.getElementById("precio_entrada");
//   const agregarEntrada = document.getElementById("agregar_entrada");
//   const tablaEntradas = document.getElementById("tabla_entradas");
//   const entradasAgregadas = document.getElementById("entradas_agregadas");

//   document.getElementById("general").addEventListener("click", function () {
//     infoEntrada.classList.remove("hide");
//     precioEntrada.textContent = precioGeneral;
//   });

//   document.getElementById("vip").addEventListener("click", function () {
//     infoEntrada.classList.remove("hide");
//     precioEntrada.textContent = precioVip;
//   });

//   agregarEntrada.addEventListener("click", function () {
//     const precio = parseInt(precioEntrada.textContent);
//     const fila = documente.createElement("tr");
//     deserialize.innerHTML = `<td>${precio}</td>`;
//     tablaEntradas.appendChild(fila);
//     entradasAgregadas.classList.remove("hide");
//   });
// });

const sectorGeneral = document.getElementById("genreal");
const sectorVIP = document.getElementById("vip");
const infoEntrada = document.getElementById("info_entrada");
const precioEntrada = document.getElementById("precio_entrada");

sectorGeneral.addEventListener("click", () => {
  infoEntrada.classList.remove("hide");
  precioEntrada.textContent = `Precio: <%= evento.precioEntradaGeneral %>$`;
});

sectorVIP.addEventListener("click", () => {
  infoEntrada.classList.remove("hide");
  precioEntrada.textContent = `Precio: <%= evento.precioEntradaExclusiva %>$`;
});

const agregarEntrada = document.getElementById("agregar-entrada");
agregarEntrada.addEventListener("click", () => {

});
