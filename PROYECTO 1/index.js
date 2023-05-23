//esto es para el formulario de contacto para que no se pueda poner el nomnbre de ironhack.
function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    
    if (nombre.toUpperCase() === "IRONHACK") {
      alert("No puedes usar ese nombre");
      return false; // Evita que se envíe el formulario
    }
    
    return true; // Permite el envío del formulario si no hay errores
  }