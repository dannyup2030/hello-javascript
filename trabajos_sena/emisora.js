// Creamos un array global para almacenar todas las personas
let personas = [];

function agregarPersona() {
    let nombre = prompt("Ingrese el nombre:");
    let cedula = prompt("Ingrese la cédula:");
    let fechaNacimiento = prompt("Ingrese la fecha de nacimiento:");
    let correo = prompt("Ingrese el correo:");
    let ciudadResidencia = prompt("Ingrese la ciudad de residencia:");
    let ciudadOrigen = prompt("Ingrese la ciudad de origen");

    //Array para almacenar las canciones favoritas
    let canciones = [];

    for (let i = 1; i <= 3; i++) {
        let titulo = prompt(`Ingrese el título de la canción ${i}:`);
        let artista = prompt(`Ingrese el artista de la canción ${i}:`);
        canciones.push({ titulo: titulo, artista: artista }); // Guardamos como objeto
    }

    //Creamos un objeto con la información de la persona
    let persona = {
        nombre: nombre,
        cedula: cedula,
        fechaNacimiento: fechaNacimiento,
        correo: correo,
        ciudadResidencia: ciudadResidencia,
        ciudadOrigen: ciudadOrigen,
        cancionesFavoritas: canciones // Agregamos el array de canciones
    };

    // Agregamos la persona al array global
    personas.push(persona);

    console.log("Persona agregada con éxito.");
}

// Función para mostrar todas las personas registradas con sus canciones
function mostrarPersonas() {
    console.log("Lista de personas registradas:");
    personas.forEach((persona, index) => {
        console.log(`\nPersona ${index + 1}:`);
        console.log(`Nombre: ${persona.nombre}`);
        console.log(`Cédula: ${persona.cedula}`);
        console.log(`Fecha de Nacimiento: ${persona.fechaNacimiento}`);
        console.log(`Correo: ${persona.correo}`);
        console.log(`Ciudad de Residencia: ${persona.ciudadResidencia}`);
        console.log(`Ciudad de Origen: ${persona.ciudadOrigen}`);
        console.log("Canciones favoritas:");
        persona.cancionesFavoritas.forEach((cancion, i) => {
            console.log(`   ${i + 1}. "${cancion.titulo}" - ${cancion.artista}`);
        });
    });
}

//Bucle para permitir agregar varias personas
let continuar = true;
while (continuar) {
    let opcion = prompt("Seleccione una opción:\n a) Agregar persona\n b) Mostrar todas las personas\n c) Salir").toLowerCase();

    if (opcion === "a") {
        agregarPersona();
    } else if (opcion === "b") {
        mostrarPersonas();
    } else if (opcion === "c") {
        continuar = false; // Finaliza el programa
    } else {
        console.log("Opción no válida, intenta de nuevo.");
    }
}
