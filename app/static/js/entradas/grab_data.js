var entradasAlmacenadas = localStorage.getItem("entradas");
if (entradasAlmacenadas) {
  var datosEntradas = JSON.parse(entradasAlmacenadas);

  if (datosEntradas.cantidadGeneral > 0) {
    $(".tabla_entradas tbody").append(
      `<tr>
          <td class="tipo_entrada">General</td>
          <td class="cantidad_entrada">${datosEntradas.cantidadGeneral}</td>
          <td class="precio">${
            datosEntradas.cantidadGeneral * datosEntradas.precioGeneral
          }</td>
        </tr>`
    );
  }

  if (datosEntradas.cantidadVIP > 0) {
    $(".tabla_entradas tbody").append(
      `<tr>
          <td class="tipo_entrada">VIP</td>
          <td class="cantidad_entrada">${datosEntradas.cantidadVIP}</td>
          <td class="precio">${
            datosEntradas.cantidadVIP * datosEntradas.precioVIP
          }</td>
        </tr>`
    );
  }

  var totalPagar =
    datosEntradas.cantidadGeneral * datosEntradas.precioGeneral +
    datosEntradas.cantidadVIP * datosEntradas.precioVIP;
  $("#total_pagar").text(totalPagar);
}
