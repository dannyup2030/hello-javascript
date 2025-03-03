// Programa para analizar edades de un grupo de 10 personas

function analizarEdades() {
    let edades = [];
    const totalPersonas = 10;

    // Solicitar edades y validar rango
    for (let i = 0; i < totalPersonas; i++) {
        let edad;
        do {
            edad = parseInt(prompt(`Ingrese la edad de la persona ${i + 1} (1 a 120 años):`), 10);
            if (isNaN(edad) || edad < 1 || edad > 120) {
                console.log("Edad inválida. Debe estar entre 1 y 120 años. Intente de nuevo.");
            }
        } while (isNaN(edad) || edad < 1 || edad > 120);

        edades.push(edad);
    }

    
    let menoresEdad = edades.filter(e => e < 18).length;
    let mayoresEdad = edades.filter(e => e >= 18).length;
    let adultosMayores = edades.filter(e => e >= 60).length;
    
    // Calcular valores usando Math.min y Math.max
    let edadMinima = Math.min(...edades);
    let edadMaxima = Math.max(...edades);
    
    
    const promedio = (edades.reduce((acc, e) => acc + e, 0) / totalPersonas).toFixed(2);


    console.log("Resultados del análisis de edades:");
    console.log(`Menores de edad: ${menoresEdad}`);
    console.log(`Mayores de edad: ${mayoresEdad}`);
    console.log(`Adultos mayores (60+): ${adultosMayores}`);
    console.log(`Edad más baja: ${edadMinima} años`);
    console.log(`Edad más alta: ${edadMaxima} años`);
    console.log(`Promedio de edades: ${promedio} años`);
}


analizarEdades();
