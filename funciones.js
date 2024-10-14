//Ejercicio 1

let a = 5;
let b = 10;
let c = a + b;
console.log(`a(${a}), b(${b}), c = ${c}`);

//Ejercicio 2

let nombre = prompt("Dime  tu nombre");
console.log(`Hola, ${nombre}!`);

//Ejercicio 3
let d = 8;
let e = 12;
let mayor = a > b ? a : b;
console.log(`El mayor es: ${mayor}`);

//Ejercicio 4

let numeroIngresado = prompt("Ingresa un número:");
if (numeroIngresado % 2 === 0) {
  console.log(`El número ${numeroIngresado} es par`);
} else {
  console.log(`El número ${numeroIngresado} es impar`);
}

//Ejercicio 5

let num = 10;
while (num > 0) {
  console.log(num);
  num--;
}

//Ejericicio 6

let numero;
do {
  numero = prompt("Ingresa un número mayor a 100:");
} while (numero <= 100);
console.log(`Número ingresado: ${numero}`);

//Ejericio 7

function esPar(numero) {
    return numero % 2 === 0;
  }
  console.log(esPar(10));  // true
  console.log(esPar(7));   // false

//Ejercicio 8

function convertirCelsiusAFahrenheit(celsius) {
    return celsius * 1.8 + 32; }
  console.log(convertirCelsiusAFahrenheit(25));  // 77

//Ejercicio 9

let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Buenos Aires",
    cambiarCiudad(nuevaCiudad) {
      this.ciudad = nuevaCiudad;
    }
  };
  persona.cambiarCiudad("Córdoba");
  console.log(persona);

//Ejericio 10

let libro = {
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    año: 1943,
    esAntiguo() {
      return new Date().getFullYear() - this.año > 10;
    }
  };
  console.log(libro.esAntiguo() ? "El libro es antiguo" : "El libro es reciente");

//Ejercicio 11

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let multiplicados = numeros.map(num => num * 2);
console.log("Original:", numeros);
console.log("Multiplicados:", multiplicados);

//Ejercicio 12

let pares = [];
for (let i = 1; pares.length < 10; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  }
}
console.log(pares);

//Ejercicio 13

function cambiarColor() {
    let parrafos = document.querySelectorAll('p');
    parrafos.forEach(p => p.style.color = "blue");
  }

//Ejercicio 14

function mostrarAlerta() {
    let valor = document.getElementById('texto').value;
    alert(`Texto ingresado: ${valor}`);
  }

//Ejercicio 15

document.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', function() {
      console.log(this.textContent);
    });
  });

//Ejercicio 16
function deshabilitar() {
    let campo = document.getElementById('campoTexto');
    campo.disabled = true;
  }

  function habilitar() {
    let campo = document.getElementById('campoTexto');
    campo.disabled = false;
  }

//Ejercicio 17

const form = document.getElementById('formEmail');
  const divCorreo = document.getElementById('correoGuardado');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('correo').value;
    localStorage.setItem('correo', email);
    mostrarCorreo();
  });

  function mostrarCorreo() {
    let emailGuardado = localStorage.getItem('correo');
    if (emailGuardado) {
      divCorreo.textContent = `Correo guardado: ${emailGuardado}`;
    }
  }

  function eliminarCorreo() {
    localStorage.removeItem('correo');
    divCorreo.textContent = '';
  }

  document.addEventListener('DOMContentLoaded', mostrarCorreo);