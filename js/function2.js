let valorGuardado = ""; // Variable para almacenar el valor

const resultCDiv = document.getElementById("result_c");

function guardarValor() {
    const input = document.getElementById("inputValue");
    valorGuardado = parseFloat(input.value); // Guardar el valor del input en la variable como número

    if (valorGuardado <= 1300) {
        resultCDiv.innerHTML = "Usted es un consumidor ejemplar";
        mostrarImagen("imagenEjemplar");
    } else if (valorGuardado <= 1600) {
        resultCDiv.innerHTML = "Usted es un consumidor moderado";
        mostrarImagen("imagenModerado");
    } else if (valorGuardado <= 2300) {
        resultCDiv.innerHTML = "Usted es un consumidor despreocupado";
        mostrarImagen("imagenDespreocupado");
    } else if (valorGuardado > 2300) {
        resultCDiv.innerHTML = "Usted es un consumidor derrochador";
        mostrarImagen("imagenDerrochador");
    } else {
        ocultarImagen();
    }
}

function mostrarImagen(idImagen) {
    ocultarImagen(); // Ocultar cualquier imagen mostrada anteriormente
    const imagen = document.getElementById(idImagen);
    imagen.style.display = "block";
    imagenContainer.style.display = "block";
}

function ocultarImagen() {
    const imagenes = document.querySelectorAll("#imagenContainer img");
    imagenes.forEach((imagen) => {
        imagen.style.display = "none";
    });
    imagenContainer.style.display = "none";
}