'use strict';

//funzione che genra numeri casualmente
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};


// un ciclo for che fa generare 5 numer casualemnte con l'utilizzo della funzione randomNum
for ( let i=1; i<=5; i++){
    let randomazier =randomNum(1, 100);
    let numerBox = document.querySelector('.display');
    numerBox.innerHTML += `<div class="margin"><h1 class="center">${randomazier}</h1></div>`;
    let remembered = document.querySelector('.risultati');

    setTimeout(function() {
        numerBox.remove();
    }, 3000);


    setTimeout(function () {
        let userPromtp;
        do{
            userPromtp = parseInt( prompt('Inserisci i numeri che ti riccordi'));
        }
        while (isNaN(userPromtp));
        console.log(userPromtp);

        if(randomazier === userPromtp){
            remembered.innerHTML += `<div class="result-margin"><h1 class="center"> Il numero ${randomazier} e stato riccordato</h1></div>`;
        }
        else{
            remembered.innerHTML += `<div class="result-margin"><h1 class="center"> Tu inserire: ${userPromtp}. Ma numero essere ${randomazier}</h1></div>`;
        }

    }, 3020);

};