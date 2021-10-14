/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

//collego oggetti DOM
const btnPlay = document.getElementById('bntplay')
var giocatore = document.getElementById('giocatore')
var vincitore = document.getElementById('vincitore')
var computer = document.getElementById('computer')

btnPlay.addEventListener('click',function() {
    let numeroComputer = Math.floor(Math.random() * 6)+1;
    let numeroGiocatore = Math.floor(Math.random() * 6)+1;
    giocatore.innerHTML = 'Giocatore:' + numeroGiocatore
    computer.innerHTML = 'Computer:' + numeroComputer
     if (numeroGiocatore < numeroComputer) {
        vincitore.innerHTML = 'Vincitore: COMPUTER' 
    }else if (numeroGiocatore > numeroComputer) {
        vincitore.innerHTML = 'Vincitore: GIOCATORE!!'
    }else {
        vincitore.innerHTML = 'Vincitore: NESSUNO!!' 
    }
})





