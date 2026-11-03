// arreglo tareas iniciales
let tareas = [
    {
        nombre: "Dar alimento a Max",
        hora: "08:00",
        completada: true
    },
    {
        nombre: "Sacar a Max a pasear",
        hora: "10:00",
        completada: false
    },
    {
        nombre: "Cambiar el agua",
        hora: "12:00",
        completada: false
    },
    {
        nombre: "Dar su segunda comida",
        hora: "17:00",
        completada: false
    }
];

// arreglos xra reportes ya arreglos

let reportes = [];
let actualizaciones = [];

// MOSTRAR TAREAS
function mostrarTareas() {

    let lista = document.getElementById("listaTareas");

    lista.innerHTML = "";

    for (let i = 0; i < tareas.length; i++) {

        let nuevaTarea = document.createElement("div");

        nuevaTarea.className = "tarea";

        let informacion = document.createElement("div");

        let checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.checked = tareas[i].completada;

        // Cambiar el estado de la tarea
        checkbox.addEventListener("change", function() {
            if (checkbox.checked == true) {

                tareas[i].completada = true;
            } else {
                tareas[i].completada = false;
            }
            mostrarTareas();

            
        });

        let nombre = document.createElement("span");

        nombre.textContent = tareas[i].nombre;

        if (tareas[i].completada == true) {

            nombre.className = "completada";

        }

        let hora = document.createElement("small");

        hora.textContent = " - " + tareas[i].hora;
        informacion.appendChild(checkbox);
        informacion.appendChild(nombre);
        informacion.appendChild(hora);
        nuevaTarea.appendChild(informacion);
        lista.appendChild(nuevaTarea);
    }

    actualizarResumen();

}



// ACTUALIZAR RESUMEN
function actualizarResumen() {
    let total = tareas.length;
    let completadas = 0;
    let pendientes = 0;

    for (let i = 0; i < tareas.length; i++) {

        if (tareas[i].completada == true) {

            completadas++;

        } else {

            pendientes++;

        }

    }

    document.getElementById("totalTareas").textContent = total;

    document.getElementById("completadas").textContent = completadas;

    document.getElementById("pendientes").textContent = pendientes;

}

// Agregar tareas
document.getElementById("formTarea").addEventListener("submit", function(event) {

    event.preventDefault();
    let nombre = document.getElementById("nombreTarea").value;
    let hora = document.getElementById("horaTarea").value;
    let nuevaTarea = {

        nombre: nombre,

        hora: hora,

        completada: false

    };
    tareas.push(nuevaTarea);
    mostrarTareas();
    document.getElementById("formTarea").reset();

});



document.getElementById("formReporte").addEventListener("submit", function(event) {

    event.preventDefault();
    let tipo = document.getElementById("tipoReporte").value;
    let descripcion = document.getElementById("descripcionReporte").value;
    let nuevoReporte = {

        tipo: tipo,

        descripcion: descripcion

    };

    reportes.push(nuevoReporte);
    mostrarReportes();
    document.getElementById("formReporte").reset();

});


// mostrar reportes REVISAR MAÑANA
function mostrarReportes() {

    let lista = document.getElementById("listaReportes");

    lista.innerHTML = "";

    for (let i = 0; i < reportes.length; i++) {

        let nuevoReporte = document.createElement("div");

        nuevoReporte.className = "reporte";

        let titulo = document.createElement("h4");

        titulo.textContent = reportes[i].tipo;
        let descripcion = document.createElement("p");
        descripcion.textContent = reportes[i].descripcion;
        nuevoReporte.appendChild(titulo);
        nuevoReporte.appendChild(descripcion);
        lista.appendChild(nuevoReporte);

    }

}



document.getElementById("formActualizacion").addEventListener("submit", function(event) {

    event.preventDefault();

    let descripcion = document.getElementById("descripcionActualizacion").value;

    let archivo = document.getElementById("fotoActualizacion").files[0];

    // Verificar si el archivo es imagen
    if (archivo && !archivo.type.startsWith("image/")) {
        alert("Selecciona una imagen válida.");
        return;

    }

    let nuevaActualizacion = {

        descripcion: descripcion,

        imagen: archivo ? URL.createObjectURL(archivo) : ""

    };
    actualizaciones.push(nuevaActualizacion);
    mostrarActualizaciones();
    document.getElementById("formActualizacion").reset();

});


// mostrar actualizacion es
function mostrarActualizaciones() {

    let lista = document.getElementById("listaActualizaciones");

    lista.innerHTML = "";

    for (let i = 0; i < actualizaciones.length; i++) {

        let nuevaActualizacion = document.createElement("div");

        nuevaActualizacion.className = "actualizacion";

        let descripcion = document.createElement("p");

        descripcion.textContent = actualizaciones[i].descripcion;

        nuevaActualizacion.appendChild(descripcion);

        if (actualizaciones[i].imagen != "") {
            let imagen = document.createElement("img");
            imagen.src = actualizaciones[i].imagen;
            imagen.alt = "Fotografía de la mascota";
            nuevaActualizacion.appendChild(imagen);
        }
        lista.appendChild(nuevaActualizacion);

    }

}


mostrarTareas();
mostrarReportes();
mostrarActualizaciones();
