'use strict';
//funzione che genra numeri casualmente
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
// un ciclo for che fa generare 5 numer casualemnte con l'utilizzo della funzione randomNum
for ( let i=1; i<=5; i++){
    let randomazier =randomNum(1, 100)
    console.log(randomazier)
}