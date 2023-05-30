'use strict';

//funzione che genra numeri casualmente
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};


// un ciclo for che fa generare 5 numer casualemnte con l'utilizzo della funzione randomNum ed esegue tutto il programmino

for ( let i=1; i<=5; i++){
    let randomazier =randomNum(1, 100);
    let numerBox = document.querySelector('.display');
    numerBox.innerHTML += `<div class="margin mt-5"><h1 class="center">${randomazier}</h1></div>`;
    let remembered = document.querySelector('.risultati');
    //timeout che fa sparire i numeri
    setTimeout(function() {
        numerBox.remove();
    }, 30000);

    //escuzione prompt 
    setTimeout(function () {
        let userPromtp;
        do{
            userPromtp = parseInt( prompt('Inserisci i numeri che ti riccordi'));
        }
        while (isNaN(userPromtp));
        console.log(userPromtp);

        if(randomazier == userPromtp){
            remembered.innerHTML += `                    
            <div class="result-margin p-4">
                <p class=""> Il numero: ${randomazier} e corretto</p> 
            </div>`;
        }
        else{
            remembered.innerHTML += `
            <div class="result-margin p-4">
                <p class=""> Tu inserire: ${userPromtp}.</p> 
                <p class=""> Ma numero essere: ${randomazier}</p>
            </div>
            `;
        }

    }, 30020);

};