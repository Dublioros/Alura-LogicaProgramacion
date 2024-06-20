let numeroSecreto = 0;
let intentos = 0;

function asignaarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let intentos = 1;
    console.log(numeroSecreto);
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignaarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos === 1 ? 'vez' : 'veces'} !`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if (numeroDeUsuario > numeroSecreto)
        asignaarTextoElemento('p', "El numero secreto es menor");
    else
        asignaarTextoElemento('p', "El numero secreto es mayor");
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
    asignaarTextoElemento('h1', "Bienvenido al juego!");
    asignaarTextoElemento('p', "Indica un numero del 1 a 10" );
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

condicionesIniciales();