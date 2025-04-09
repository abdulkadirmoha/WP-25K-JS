/* 
Kirjota funktio nimeltä findMinMax:
- Kysy käyttäjältä kuinka monta numeroa he haluavat antaa. 
- Sen jälkeen pyydä käyttäjältä heidän haluamansa määrä numeroita. 
- Kun numerot on syötetty päättele ja tulosta konsoliin:
    - Pienin numero.
    - Suurin numero. 
*/

function findMinMax(){
    let count = 0;
    let summa = 0;
    let numbers = [];
   

    let amount  = parseFloat(prompt("kuinka monta numeroa he haluavat antaa."));
    while(count < amount) {

        let userInput = parseFloat(prompt("syöttä numeroa."));
        if(!isNaN(userInput) || amount <= 0){
            numbers.push(userInput)
        } else{
            alert("Syötä positiivinen luku.");
        }
       
        numbers.push(userInput);
        count++;

    }
    console.log(Math.max(...numbers))
     console.log(Math.min(...numbers));
}

findMinMax()