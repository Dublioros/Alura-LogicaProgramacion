let numeroSecreto = 0;
let intentos = 0;
//Arrays
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let intentos = 1;
    console.log(numeroSecreto);
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces'} !`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if (numeroDeUsuario > numeroSecreto)
        asignarTextoElemento('p', "El numero secreto es menor");
    else
        asignarTextoElemento('p', "El numero secreto es mayor");
    intentos++;
    limpiarCaja();
    return;
}

function nuevoJuego(){
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', "Bienvenido al juego!");
    asignarTextoElemento('p', `Indica un numero del 1 a ${numeroMaximo}` );
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
}

//Recursividad
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', "Ya se sortearon todos los numeros posibles")
    } else {
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
condicionesIniciales();