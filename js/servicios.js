
var solicitudes = [];

var formulario = document.getElementById("formularioServicio");
var listaSolicitudes = document.getElementById("listaSolicitudes");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    var cliente = document.getElementById("nombreCliente").value;
    var mascota = document.getElementById("nombreMascota").value;
    var servicio = document.getElementById("tipoServicio").value;
    var fecha = document.getElementById("fechaServicio").value;
    var hora = document.getElementById("horaServicio").value;

    var solicitud = {
        cliente: cliente,
        mascota: mascota,
        servicio: servicio,
        fecha: fecha,
        hora: hora,
        estado: "Pendiente"
    };

    solicitudes.push(solicitud);

    mostrarSolicitudes();
    formulario.reset();
});

function mostrarSolicitudes() {
    listaSolicitudes.innerHTML = "";

    if (solicitudes.length === 0) {
        listaSolicitudes.innerHTML =
            '<tr><td colspan="7" class="text-center">No hay solicitudes registradas.</td></tr>';
        return;
    }

    for (var i = 0; i < solicitudes.length; i++) {
        var solicitud = solicitudes[i];

        var fila = `
            <tr>
                <td>${solicitud.cliente}</td>
                <td>${solicitud.mascota}</td>
                <td>${solicitud.servicio}</td>
                <td>${solicitud.fecha}</td>
                <td>${solicitud.hora}</td>
                <td>${solicitud.estado}</td>
                <td>
                    <button class="btn btn-success btn-sm"
                        onclick="cambiarEstado(${i}, 'Aceptada')">
                        Aceptar
                    </button>

                    <button class="btn btn-danger btn-sm"
                        onclick="cambiarEstado(${i}, 'Rechazada')">
                        Rechazar
                    </button>
                </td>
            </tr>
        `;

        listaSolicitudes.innerHTML += fila;
    }
}

function cambiarEstado(posicion, nuevoEstado) {
    solicitudes[posicion].estado = nuevoEstado;
    mostrarSolicitudes();
}
