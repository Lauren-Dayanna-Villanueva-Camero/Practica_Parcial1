  // Botón Log in
  document.getElementById("btnLogin").addEventListener("click", function() {
    const usuario = document.getElementById("usuario").value;
    const clave = document.getElementById("clave").value;

    if (usuario && clave) {
      console.log("Usuario: " + usuario);
      console.log("Clave: " + clave);
    } else {
      console.log("Por favor complete los campos.");
    }
  });

  // Botón Sign Up → redirige al formulario de registro
  document.getElementById("btnSignup").addEventListener("click", function() {
    window.location.href = "registro.html"; // Cambia por tu archivo real
  });

  // Botón Cancelar → redirige al menú de noticias
  document.getElementById("btnCancel").addEventListener("click", function() {
    href = "menu_noticias.html"; 
  });