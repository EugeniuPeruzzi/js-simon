'use strict';

//funzione che genra numeri casualmente
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

//funzione settimeoput del prompt
function promptOn(userPromtp){
    setTimeout(function () {
        do{
            userPromtp = parseInt( prompt('Inserisci i numeri che ti riccordi'));
        }
        while (isNaN(userPromtp))

        console.log(userPromtp);
    }, 3020);
}

// un ciclo for che fa generare 5 numer casualemnte con l'utilizzo della funzione randomNum
for ( let i=1; i<=5; i++){

    let randomazier =randomNum(1, 100);
    let numerBox = document.querySelector('.display');
    numerBox.innerHTML += `<div class="margin"><h1 class="center">${randomazier}</h1></div>`;

    setTimeout(function() {
        numerBox.remove();
    }, 3000);

    let promptUser = promptOn()

    



};