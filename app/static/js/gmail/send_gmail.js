function enviarFormulario() {
  // Obtener el valor del campo de correo electrónico
  var email = document.getElementById("email").value;

  // Modificar la acción del formulario con la dirección de correo electrónico
  document.getElementById("compraForm").action =
    "https://formsubmit.co/" + email;

  // Enviar el formulario
  document.getElementById("compraForm").submit();
}
