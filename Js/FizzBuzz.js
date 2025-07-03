// FizzBuzz Challenge
var cantidad = parseInt(prompt("Ingrese la cantidad de veces que desea imprimir el ciclo FizzBuzz:"));
for(var i = 1; i<cantidad; i++){
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }else if(i % 3 === 0) {
        console.log("Fizz");
    } else if(i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}   