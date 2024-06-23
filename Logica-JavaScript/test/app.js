let title = document.querySelector('h1');

title.innerHTML = "Hora del Desafio";

function consoleBtn() {
    alert("El boton fue clicado");
}

function promptBtn() {
    let ciudadBrasil = prompt("Nombre una ciudad de Brasil:");

    alert(`Estuve en ${ciudadBrasil} y me acorde de ti`);
}

function alertBtn() {
    alert("Yo amo JS");
}

function sumaBtn() {
    let num1 = Number(prompt("Ingrese un numero"));
    let num2 = Number(prompt("Ingrese otro numero"));

    let suma = num1 + num2;

    alert(`La suma de ambos numeros da: ${suma}`);
}