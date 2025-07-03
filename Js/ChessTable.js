//Mesa de Ajedrez
//Crea una mesa de ajedrez de 8x8 utilizando un ciclo for anidado.
//Cada celda debe alternar entre blanco
var tamaño = parseInt(prompt("Ingrese el tamaño en el que desea su tablero de ajedrez: "));
var tablero = "";
for (var i = 0; i < tamaño; i++) {
   fila = "";
   for(var j = 0; j < tamaño; j++){
         if((i + j) % 2 === 0) {
              fila += "#"; // Celda negra
         } else {
              fila += " "; // 
         }    
   }
    tablero = tablero + fila + "\n"; // Agrega la fila al tablero
}
console.log(tablero); // Imprime el tablero en la consola
