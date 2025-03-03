function leerVector(nombre) {
    let vector = [];
    let i = 0;
    
    while (i < 5) {
        let num = parseInt(prompt(`Ingrese el número ${i + 1} para el vector ${nombre} (en orden ascendente):`));
        
        // Validamos que sea un número y que se mantenga el orden ascendente
        if (isNaN(num)) {
            console.log("Debe ingresar un número válido.");
        } else if (i > 0 && num <= vector[i - 1]) {
            console.log("Debe ingresar un número mayor al anterior.");
        } else {
            vector.push(num);
            i++;
        }
    }

    return vector;
}

function mezclarVectores(v1, v2) {
    return [...v1, ...v2].sort((a, b) => a - b);
}

// Leer los dos vectores del usuario
let vector1 = leerVector("1");
let vector2 = leerVector("2");

// Fusionar y ordenar los vectores
let resultado = mezclarVectores(vector1, vector2);

console.log("Vector combinado ordenado:", resultado);
