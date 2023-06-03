'use strict';

// Funzione che genera numeri casualmente
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Array per memorizzare i numeri generati casualmente
let randomArrayNums = [];

// Ciclo for che genera 5 numeri casualmente
for (let i = 1; i <= 5; i++) {
    randomArrayNums.push(randomNum(1, 100));
}

// Array per memorizzare i numeri inseriti dall'utente
let userNumbers = [];

// Ciclo for che gestisce l'interazione con l'utente
for (let j = 0; j < randomArrayNums.length; j++) {
    let definitiveNum = randomArrayNums[j];

    let numerBox = document.querySelector('.display');
    numerBox.innerHTML += `<div class="margin mt-5"><h1 class="center">${definitiveNum}</h1></div>`;
    let remembered = document.querySelector('.risultati');
    
    // Timeout che fa sparire i numeri
    setTimeout(function() {
        numerBox.remove();
    }, 30000);

    // Prompt per l'inserimento dei numeri da parte dell'utente
    setTimeout(function () {
        let userPrompt = parseInt(prompt('Inserisci i numeri che ti ricordi'));
        
        if (isNaN(userPrompt)) {
            alert('Il valore inserito non è un numero');
            userPrompt = parseInt(prompt('Inserisci nuovamente il numero che ti ricordi'));
        }
        userNumbers.push(userPrompt);

        let isCorrect = false;
        for (let k = 0; k < randomArrayNums.length; k++) {
            if (userNumbers[j] === randomArrayNums[k]) {
                isCorrect = true;
                break;
            }
        }
        
        if (isCorrect) {
            remembered.innerHTML += `                    
                <div class="result-margin p-4">
                    <p class="">Il numero: ${userNumbers[j]} è corretto</p> 
                </div>`;
        } else {
            remembered.innerHTML += `
                <div class="result-margin p-4">
                    <p class="">Tu hai inserito: ${userNumbers[j]}.</p> 
                    <p class="">Ma il numero era: ${randomArrayNums[j]}</p>
                </div>
            `;
        }
    }, 30020);
}
