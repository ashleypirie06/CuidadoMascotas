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
    let horarios = obtenerDato("horarios");
    let cuidados = obtenerDato("cuidados");

    let vacunas = obtenerDato("vacunas");
    let enfermedades = obtenerDato("enfermedades");
    let veterinario = obtenerDato("veterinario");
    let contactoVeterinario = obtenerDato("contactoVeterinario");
    let contacto = obtenerDato("contacto");
    let telefonoEmergencia = obtenerDato("telefonoEmergencia");

    let foto = document.getElementById("foto").files[0];
    let imagen = "";

    if (foto) {
        imagen = URL.createObjectURL(foto);
    }

    mostrarFicha(nombre, especie, raza, edad, peso,
        alimentacion, horarios, cuidados, vacunas,
        enfermedades, veterinario, contactoVeterinario, contacto, telefonoEmergencia, imagen);

    limpiarFormulario();
}

// funcion para crear y mostrar la ficha
function mostrarFicha(nombre, especie, raza, edad, peso, alimentacion, horarios, 
    cuidados, vacunas, enfermedades, veterinario, contactoVeterinario, contacto, telefonoEmergencia, imagen) {

    let ficha = document.createElement("div");
    ficha.classList.add("ficha");

    ficha.innerHTML = 
        (imagen !== "" ? "<img src='" + imagen + "' width='150'>" : "") +
        "<h3>" + nombre + "</h3>" +
        "<p><strong>Especie:</strong> " + especie + "</p>" +
        "<p><strong>Raza:</strong> " + raza + "</p>" +
        "<p><strong>Edad:</strong> " + edad + " años</p>" +
        "<p><strong>Peso:</strong> " + peso + " kg</p>" +

        "<h4>Alimentación y cuidados</h4>" +
        "<p><strong>Alimentación:</strong> " + alimentacion + "</p>" +
        "<p><strong>Horarios:</strong> " + horarios + "</p>" +
        "<p><strong>Cuidados:</strong> " + cuidados + "</p>" +

        "<h4>Información médica</h4>" +
        "<p><strong>Vacunas:</strong> " + vacunas + "</p>" +
        "<p><strong>Enfermedades:</strong> " + enfermedades + "</p>" +

        "<h4>Contactos</h4>" +
        "<p><strong>Veterinario:</strong> " + veterinario + "</p>" +
        "<p><strong>Contacto del veterinario:</strong> " + contactoVeterinario + "</p>" +
        "<p><strong>Contacto de emergencia:</strong> " + contacto + "</p>" +
        "<p><strong>Teléfono de emergencia:</strong> " + telefonoEmergencia + "</p>";

    document.getElementById("listaMascotas").appendChild(ficha);
}
// funcion para limpiar los campos del formulario
function limpiarFormulario() {
    document.getElementById("formMascota").reset();
}

document.getElementById("formMascota").addEventListener("submit", registrarMascota);