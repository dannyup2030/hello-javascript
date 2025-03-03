// Función para calcular área o perímetro según la figura
function calcularFigura() {
    let figura = prompt("Ingrese la figura (triángulo, rectángulo, cuadrado, círculo):").toLowerCase();
    let operacion = prompt("¿Desea calcular el área o el perímetro?").toLowerCase();

    let resultado;

    switch (figura) {
        case "triángulo":
        case "triangulo":
            if (operacion === "área" || operacion === "area") {
                let base = parseFloat(prompt("Ingrese la base del triángulo:"));
                let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
                resultado = (base * altura) / 2;
                console.log(`El área del triángulo es: ${resultado}`);
            } else if (operacion === "perímetro" || operacion === "perimetro") {
                let lado1 = parseFloat(prompt("Ingrese el primer lado del triángulo:"));
                let lado2 = parseFloat(prompt("Ingrese el segundo lado del triángulo:"));
                let lado3 = parseFloat(prompt("Ingrese el tercer lado del triángulo:"));
                resultado = lado1 + lado2 + lado3;
                console.log(`El perímetro del triángulo es: ${resultado}`);
            } else {
                console.log("Operación no válida.");
            }
            break;

        case "rectángulo":
        case "rectangulo":
            if (operacion === "área" || operacion === "area") {
                let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
                let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
                resultado = base * altura;
                console.log(`El área del rectángulo es: ${resultado}`);
            } else if (operacion === "perímetro" || operacion === "perimetro") {
                let base = parseFloat(prompt("Ingrese la base del rectángulo:"));
                let altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
                resultado = 2 * (base + altura);
                console.log(`El perímetro del rectángulo es: ${resultado}`);
            } else {
                console.log("Operación no válida.");
            }
            break;

        case "cuadrado":
            if (operacion === "área" || operacion === "area") {
                let lado = parseFloat(prompt("Ingrese el lado del cuadrado:"));
                resultado = lado ** 2;
                console.log(`El área del cuadrado es: ${resultado}`);
            } else if (operacion === "perímetro" || operacion === "perimetro") {
                let lado = parseFloat(prompt("Ingrese el lado del cuadrado:"));
                resultado = 4 * lado;
                console.log(`El perímetro del cuadrado es: ${resultado}`);
            } else {
                console.log("Operación no válida.");
            }
            break;

        case "círculo":
        case "circulo":
            if (operacion === "área" || operacion === "area") {
                let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
                resultado = Math.PI * radio ** 2;
                console.log(`El área del círculo es: ${resultado.toFixed(2)}`);
            } else if (operacion === "perímetro" || operacion === "perimetro") {
                let radio = parseFloat(prompt("Ingrese el radio del círculo:"));
                resultado = 2 * Math.PI * radio;
                console.log(`El perímetro del círculo (circunferencia) es: ${resultado.toFixed(2)}`);
            } else {
                console.log(" Operación no válida.");
            }
            break;

        default:
            console.log("Figura no válida.");
    }
}


calcularFigura();
