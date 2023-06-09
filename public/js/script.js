let menuLateral = document.querySelector(".barra_lateral");
let ayuda = document.querySelector(".seccion_ayuda");

document.querySelector("#menu").onclick = () => {
  menuLateral.classList.toggle("active");
};

document.querySelector("#ayuda").onclick = () => {
  ayuda.classList.toggle("active");
  menuLateral.classList.remove("active")
};

document.querySelector("#cerrar_ayuda").onclick = () => {
  ayuda.classList.remove("active");
}
