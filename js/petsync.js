"use strict";

// Estado temporal del prototipo.
// No constituye una sesión autenticada por el servidor.

const CLAVE_DEMO = "petsync_demo";

function obtenerDemo() {
    try {
        return JSON.parse(sessionStorage.getItem(CLAVE_DEMO)) || null;
    } catch {
        return null;
    }
}

function guardarDemo(nombre, correo, rol) {
    sessionStorage.setItem(CLAVE_DEMO, JSON.stringify({
        nombre: nombre,
        correo: correo,
        rol: rol
    }));
}

function cerrarDemo() {
    sessionStorage.removeItem(CLAVE_DEMO);
    window.location.href = "login.html";
}

function configurarDashboard() {
    const usuario = obtenerDemo();
    const saludo = document.getElementById("saludo");
    const rolActual = document.getElementById("rolActual");
    const acceso = document.getElementById("accesoDemo");
    const salida = document.getElementById("cerrarDemo");

    if (usuario) {
        saludo.textContent = "Bienvenido, " + usuario.nombre;
        rolActual.textContent =
            "Vista demostrativa del rol: " +
            (usuario.rol === "cuidador" ? "Cuidador" : "Propietario");

        if (acceso) acceso.classList.add("ps-oculto");
        if (salida) salida.classList.remove("ps-oculto");
    }

    document.querySelectorAll("[data-rol]").forEach(function(elemento) {
        const rolPermitido = elemento.dataset.rol;

        if (usuario && usuario.rol !== rolPermitido) {
            elemento.classList.add("ps-oculto");
        }
    });

    if (salida) {
        salida.addEventListener("click", cerrarDemo);
    }
}

function configurarLogin() {
    const formulario = document.getElementById("formLogin");
    if (!formulario) return;

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        if (!formulario.reportValidity()) return;

        const correo = document.getElementById("correo").value.trim();
        const nombre = correo.split("@")[0];
        const rol = document.getElementById("rol").value;

        // La contraseña no se guarda ni se verifica.
        // Este formulario es exclusivamente una demostración visual.
        guardarDemo(nombre, correo, rol);
        window.location.href = "index.html";
    });
}

function configurarRegistro() {
    const formulario = document.getElementById("formRegistro");
    if (!formulario) return;

    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        if (!formulario.reportValidity()) return;

        const clave = document.getElementById("clave").value;
        const confirmacion = document.getElementById("confirmacion").value;
        const mensaje = document.getElementById("mensajeRegistro");

        if (clave !== confirmacion) {
            mensaje.textContent = "Las contraseñas no coinciden.";
            mensaje.classList.remove("ps-oculto");
            return;
        }

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const rol = document.getElementById("rol").value;

        // Solo se establece un estado temporal de demostración.
        // No se crea ninguna cuenta real ni se almacena la contraseña.
        guardarDemo(nombre, correo, rol);
        window.location.href = "index.html";
    });
}

document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("saludo")) configurarDashboard();
    configurarLogin();
    configurarRegistro();
});
