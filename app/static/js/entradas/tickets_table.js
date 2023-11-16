// Mostrar la tabla
var entradaGeneralButton = document.getElementById("general");
var entradaVIPButton = document.getElementById("vip");
var tablaEntradas = document.querySelector(".entradas_agregadas");

entradaGeneralButton.addEventListener("click", mostrarTabla);
entradaVIPButton.addEventListener("click", mostrarTabla);

function mostrarTabla() {
  tablaEntradas.classList.remove("hide");
}

// Funcionalidad de la tabla
$(document).ready(function () {
  var cantidadGeneral = 0;
  var precioGeneral = eventoInfo.precioEntradaGeneral;
  var cantidadVIP = 0;
  var precioVIP = eventoInfo.precioEntradaExclusiva;
  function actualizarTabla() {
    $(".tabla_entradas tbody").html("");
    if (cantidadGeneral > 0) {
      $(".tabla_entradas tbody").append(
        `<tr>
          <td class="tipo_entrada">General</td>
          <td class="cantidad_entrada">${cantidadGeneral} 
          <button class="disminuir" data-tipo="general">-</button>
          <button class="aumentar" data-tipo="general">+</button>
          </td>
          <td class="precio">${cantidadGeneral * precioGeneral}</td>
          <td class="borrar"><button class="eliminar" data-tipo="general">Eliminar</button></td>
        </tr>`
      );
    }
    if (cantidadVIP > 0) {
      $(".tabla_entradas tbody").append(
        `<tr>
          <td class="tipo_entrada">VIP</td>
          <td class="cantidad_entrada">${cantidadVIP} 
          <button class="disminuir" data-tipo="vip">-</button>
          <button class="aumentar" data-tipo="vip">+</button>
          </td>
          <td class="precio">${cantidadVIP * precioVIP}</td>
          <td class="borrar"><button class="eliminar" data-tipo="vip">Eliminar</button></td>
        </tr>`
      );
    }

    // Total
    var totalPagar = cantidadGeneral * precioGeneral + cantidadVIP * precioVIP;
    $("#total_pagar").text(totalPagar);
  }

  // Al tocar el boton nuevamente, se agrega una entrada mas a la cantidad
  $(".entrada").on("click", function () {
    var tipo = $(this).attr("id");
    if (tipo === "general") {
      cantidadGeneral++;
    } else if (tipo === "vip") {
      cantidadVIP++;
    }
    actualizarTabla();
  });

  // Agregar cantidad de entradas
  $(".tabla_entradas").on("click", ".aumentar", function () {
    var tipo = $(this).data("tipo");
    if (tipo === "general") {
      cantidadGeneral++;
    } else if (tipo === "vip") {
      cantidadVIP++;
    }
    actualizarTabla();
  });

  // Disminuir cantidad de entradas
  $(".tabla_entradas").on("click", ".disminuir", function () {
    var tipo = $(this).data("tipo");
    if (tipo === "general" && cantidadGeneral > 0) {
      cantidadGeneral--;
    } else if (tipo === "vip" && cantidadVIP > 0) {
      cantidadVIP--;
    }
    actualizarTabla();
  });

  // Borrar
  $(".tabla_entradas").on("click", ".eliminar", function () {
    var tipo = $(this).data("tipo");

    $(`.tabla_entradas tbody tr[data-tipo="${tipo}"]`).remove();

    if (tipo === "general") {
      cantidadGeneral = 0;
    } else if (tipo === "vip") {
      cantidadVIP = 0;
    }
    actualizarTabla();
  });
});
