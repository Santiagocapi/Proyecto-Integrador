document.addEventListener("DOMContentLoaded", function () {
  const localidades = document.querySelectorAll(".localidades");
  const mensajeNoEventos = document.getElementById("mensaje_no_eventos");

  localidades.forEach((localidad) => {
    localidad.addEventListener("click", function () {
      const ubicacionSeleccionada = this.textContent.trim();
      const eventos = document.querySelectorAll(".evento_box a");

      eventos.forEach((evento) => {
        const ubicacionEvento = evento.getAttribute("data_ubicacion");

        if (
          ubicacionSeleccionada === "Todos" ||
          ubicacionEvento === ubicacionSeleccionada
        ) {
          evento.style.display = "";
        } else {
          evento.style.display = "none";
        }
      });

      if (ubicacionSeleccionada === "Todos") {
        mensajeNoEventos.style.display = ""; 
      } else {
        const eventosEnUbicacion = [...eventos].some((evento) => {
          return evento.style.display !== "none";
        });

        if (!eventosEnUbicacion) {
          mensajeNoEventos.style.display = "block";
        } else {
          mensajeNoEventos.style.display = "none";
        }
      }
    });
  });
});