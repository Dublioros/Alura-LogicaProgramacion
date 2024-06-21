//ex1
let listaGenerica = [];

//ex2
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//ex3
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//ex4
function listaLenguajesDeProgramacion() {
    let i  = 0;

    while (i < lenguajesDeProgramacion.length) {
        console.log(lenguajesDeProgramacion[i]);
        i++;
    }
}

//ex5
function listaLenguajesDeProgramacionInverso() {
    let i  = lenguajesDeProgramacion.length - 1;

    while (i >= 0) {
        console.log(lenguajesDeProgramacion[i]);
        i--;
    }
}

//ex6
let listaNumerosDeProgramacion = [1, 5, 3 , 5, 7];

function promedioListaNumeros(listaNumerosDeProgramacion) {
    let i = 0;
    let suma = 0;

    while (i < listaNumerosDeProgramacion.length) {
        suma += listaNumerosDeProgramacion[i];
        i++;
    }
    
    let promedio = suma / listaNumerosDeProgramacion.length;
    return promedio;
}

let promedio = promedioListaNumeros(listaNumerosDeProgramacion);
console.log(promedio);

//ex7
function mostrarNumeroMaximo(listaNumeros) {
    let maximo = listaNumeros[0];
    let minimo = listaNumeros[0];

    for (let i = 1; i < listaNumeros.length; i++) {
        if (listaNumeros[i] > maximo) {
            maximo = listaNumeros[i];
        }
        if (listaNumeros[i] < minimo) {
            minimo = listaNumeros[i];
        }
    }

    console.log("Numero maximo:", maximo);
    console.log(`Numero minimo: ${minimo}`);
}

mostrarNumeroMaximo(listaNumerosDeProgramacion);

//ex8
function sumaNumeros(listaNumeros) {
    let sumatoria = 0;
    for (let i = 0; i < listaNumeros.length; i++)
        sumatoria += listaNumeros[i];

    console.log(sumatoria);
}

sumaNumeros(listaNumerosDeProgramacion);

//ex9
function encontrarElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return i;
        }
    }
    return -1;
}

// Ejemplo de uso
let listaDeNumeros = [10, 20, 30, 40, 50];
let elementoBuscado = 30;
let posicion = encontrarElemento(listaDeNumeros, elementoBuscado);
console.log(posicion); // Esto imprimirá: 2

elementoBuscado = 60;
posicion = encontrarElemento(listaDeNumeros, elementoBuscado);
console.log(posicion); // Esto imprimirá: -1


//ex10
function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        console.log("Las listas deben tener el mismo tamaño.");
        return null;
    }

    let listaSumada = [];
    for (let i = 0; i < lista1.length; i++) {
        listaSumada.push(lista1[i] + lista2[i]);
    }

    return listaSumada;
}

let lista1 = [1, 2, 3, 4];
let lista2 = [5, 6, 7, 8];
let listaResultado = sumarListas(lista1, lista2);
console.log(listaResultado);

//ex11
function calcularCuadrados(listaNumeros) {
    let listaCuadrados = [];

    for (let i = 0; i < listaNumeros.length; i++) {
        let numero = listaNumeros[i];
        let cuadrado = numero * numero;
        listaCuadrados.push(cuadrado);
    }

    return listaCuadrados;
}

// Ejemplo de uso
let listaDeCuadrados = calcularCuadrados(listaDeNumeros);
console.log(listaDeCuadrados); // Esto imprimirá: [1, 4, 9, 16, 25]
