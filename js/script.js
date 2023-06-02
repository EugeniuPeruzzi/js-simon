'use strict';

//funzione che genra numeri casualmente
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};


// un ciclo for che fa generare 5 numer casualemnte con l'utilizzo della funzione randomNum ed esegue tutto il programmino
for ( let i=1; i<=5; i++){
    let randomArrayNums = [];
    randomArrayNums.push(randomNum(1, 100));

    for (let j=0; j<randomArrayNums.length; j++){
        console.log(randomArrayNums[j]);
        let definitiveNum = randomArrayNums[j];

        let numerBox = document.querySelector('.display');
        numerBox.innerHTML += `<div class="margin mt-5"><h1 class="center">${definitiveNum}</h1></div>`;
        let remembered = document.querySelector('.risultati');
        //timeout che fa sparire i numeri
        setTimeout(function() {
            numerBox.remove();
        }, 3000);

        //escuzione prompt 
        setTimeout(function () {
            let userPromtp = [];
            userPromtp = parseInt(prompt('Inserisci i numeri che ti riccordi'));
            
            if (isNaN(userPromtp)){
                alert('Il Valore inserito non e un numero');
                userPromtp = parseInt( prompt('Inserisci nuovamentre il numero che ti riccordi'));
            }
            else{
                
                if(definitiveNum == userPromtp){
                    remembered.innerHTML += `                    
                    <div class="result-margin p-4">
                        <p class=""> Il numero: ${definitiveNum} e corretto</p> 
                    </div>`;
                }
                else{
                    remembered.innerHTML += `
                    <div class="result-margin p-4">
                        <p class=""> Tu inserire: ${userPromtp}.</p> 
                        <p class=""> Ma numero essere: ${definitiveNum}</p>
                    </div>
                    `;
                }
            }
            console.log(userPromtp);


        }, 3020);



    }

};