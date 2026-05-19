let numeroFizz = parseInt(prompt("Ingrese un número para FizzBuzz:"));

for(let i = 1; i <= numeroFizz; i++){

    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 === 0){
        console.log("Fizz");
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}



let n = parseInt(prompt("Ingrese la cantidad de números Fibonacci:"));

let a = 0;
let b = 1;

console.log("Serie Fibonacci:");

for(let i = 0; i < n; i++){

    console.log(a);

    let siguiente = a + b;
    a = b;
    b = siguiente;
}


function esPrimo(numero){

    if(numero <= 1){
        return false;
    }

    for(let i = 2; i < numero; i++){

        if(numero % i === 0){
            return false;
        }
    }

    return true;
}

let primo = parseInt(prompt("Ingrese un número para verificar si es primo:"));

if(esPrimo(primo)){
    console.log("El número es primo");
}
else{
    console.log("El número no es primo");
}




let tabla = parseInt(prompt("Ingrese un número para mostrar su tabla:"));

for(let i = 1; i <= 10; i++){

    console.log(tabla + " x " + i + " = " + (tabla * i));
}




function contarVocales(texto){

    let contador = 0;
    let vocales = "aeiouAEIOU";

    for(let i = 0; i < texto.length; i++){

        if(vocales.includes(texto[i])){
            contador++;
        }
    }

    return contador;
}

let cadena = prompt("Ingrese una cadena de texto:");

console.log("Cantidad de vocales: " + contarVocales(cadena));



let numeros = [12, 45, 7, 89, 23, 100, 54];

function numeroMayor(arreglo){

    let mayor = arreglo[0];

    for(let i = 1; i < arreglo.length; i++){

        if(arreglo[i] > mayor){
            mayor = arreglo[i];
        }
    }

    return mayor;
}

console.log("El número mayor es: " + numeroMayor(numeros));


function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){
    return a / b;
}

let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

let operacion = prompt("Ingrese la operación: sumar, restar, multiplicar o dividir");

if(operacion === "sumar"){
    console.log("Resultado: " + sumar(num1, num2));
}
else if(operacion === "restar"){
    console.log("Resultado: " + restar(num1, num2));
}
else if(operacion === "multiplicar"){
    console.log("Resultado: " + multiplicar(num1, num2));
}
else if(operacion === "dividir"){
    console.log("Resultado: " + dividir(num1, num2));
}
else{
    console.log("Operación no válida");
}