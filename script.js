// funcion para obtener los datos del formulario
function obtenerDato(id) {
    return document.getElementById(id).value;
}

function registrarMascota(event) {
    event.preventDefault();

    let nombre = obtenerDato("nombre");
    let especie = obtenerDato("especie");
    let raza = obtenerDato("raza");
    let edad = obtenerDato("edad");
    let peso = obtenerDato("peso");

    let alimentacion = obtenerDato("alimentacion");
    let horariosSeleccionados = document.getElementById("horarios").selectedOptions;
    let horarios = "";
    for (let i = 0; i < horariosSeleccionados.length; i++) {
        horarios += horariosSeleccionados[i].value + ", ";
}
    let cuidados = obtenerDato("cuidados");

    let vacunas = obtenerDato("vacunas");
    let enfermedades = obtenerDato("enfermedades");
    let veterinario = obtenerDato("veterinario");

    mostrarFicha(nombre, especie, raza, edad, peso,
        alimentacion, horarios, cuidados, vacunas,
        enfermedades, veterinario);

    limpiarFormulario();
}

// funcion para crear y mostrar la ficha
function mostrarFicha(nombre, especie, raza, edad, peso,
    alimentacion, horarios, cuidados, vacunas,
    enfermedades, veterinario) {

    let ficha = document.createElement("div");

    ficha.innerHTML = 
        "<h3>" + nombre + "</h3>" +
        "<p>Especie: " + especie + "</p>" +
        "<p>Raza: " + raza + "</p>" +
        "<p>Edad: " + edad + " años</p>" +
        "<p>Peso: " + peso + " kg</p>" +

        "<h4>Alimentación y cuidados</h4>" +
        "<p>Alimentación: " + alimentacion + "</p>" +
        "<p>Horarios: " + horarios + "</p>" +
        "<p>Cuidados: " + cuidados + "</p>" +

        "<h4>Información médica</h4>" +
        "<p>Vacunas: " + vacunas + "</p>" +
        "<p>Enfermedades: " + enfermedades + "</p>" +

        "<h4>Contactos</h4>" +
        "<p>Veterinario: " + veterinario + "</p>" +

    document.getElementById("listaMascotas").appendChild(ficha);
}
// funcion para limpiar los campos del formulario
function limpiarFormulario() {
    document.getElementById("formMascota").reset();
}

document.getElementById("formMascota").addEventListener("submit", registrarMascota);
