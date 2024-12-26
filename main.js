/*Ejercicio 1
function dividirCola(colaOriginal) {
    let colaPares = []; // Para los colores en índices pares
    let colaNones = []; // Para los colores en índices impares

    // Iterar sobre la cola original
    colaOriginal.forEach((color, indice) => {
        if (indice % 2 === 0) {
            colaPares.push(color); // Índices pares
        } else {
            colaNones.push(color); // Índices impares
        }
    });

    return { colaPares, colaNones };
}

// Ejemplo de uso
let colaOriginal = ["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"];
let { colaPares, colaNones } = dividirCola(colaOriginal);

console.log("Cola original:", colaOriginal);
console.log("Cola 1 (pares):", colaPares);
console.log("Cola 2 (nones):", colaNones);*/

//Ejercicio 2
function filtrarCola(colaInicial, tieneTicket) {
    let colaFinal = []; // Cola para los elementos con ticket
    let retirados = []; // Lista de elementos retirados

    while (colaInicial.length > 0) {
        let persona = colaInicial.shift(); // Desencolar el elemento

        if (tieneTicket(persona)) {
            colaFinal.push(persona); // Volver a encolar si tiene ticket
        } else {
            retirados.push(persona); // Agregar a la lista de retirados
        }
    }

    return { colaFinal, retirados };
}

// Ejemplo de uso
let colaInicial = [
    { nombre: "Juan", tieneTicket: true },
    { nombre: "María", tieneTicket: false },
    { nombre: "Pedro", tieneTicket: true },
    { nombre: "Luis", tieneTicket: false },
    { nombre: "Ana", tieneTicket: true },
    { nombre: "Carla", tieneTicket: false },
];

function tieneTicket(persona) {
    return persona.tieneTicket; // Devuelve true si tiene un ticket
}

let { colaFinal, retirados } = filtrarCola(colaInicial, tieneTicket);

console.log("Cola inicial:", colaInicial.map(p => p.nombre));
console.log("Retirados de la cola:", retirados.map(p => p.nombre));
console.log("Cola final:", colaFinal.map(p => p.nombre));

