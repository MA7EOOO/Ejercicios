// Ciclo de un triángulo
var cantidad = parseInt(prompt("Ingrese el tamaño que desea del triangulo: "));
for (var i = 1; i <= cantidad; i++){
    var linea = "";
    for (let j = 0; j < i; j++) {
        linea = linea + "x";  
    }
    console.log(linea);
}