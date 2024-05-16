  // Función para guardar los datos en el almacenamiento local
  function guardarDatos(litros) {
    localStorage.setItem('consumoAgua', litros);
  }

  // Función para cargar los datos desde el almacenamiento local
  function cargarDatos() {
    var litrosGuardados = localStorage.getItem('consumoAgua');
    if (litrosGuardados !== null) {
      document.getElementById('litrosAgua').value = litrosGuardados;
    }
  }

  // Cargar los datos cuando la página se carga
  window.addEventListener('load', cargarDatos);

  document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario

    var litrosAgua = parseInt(document.getElementById('litrosAgua').value);
    var umbral = 0.8; // Umbral del 80%

    guardarDatos(litrosAgua); // Guardar los datos

    if (litrosAgua >= umbral * 100) {
      alert("¡Estás malgastando agua!");
      document.getElementById('mensaje').innerText = "¡Estás malgastando agua!";
    } else {
      document.getElementById('mensaje').innerText = "";
    }
  });