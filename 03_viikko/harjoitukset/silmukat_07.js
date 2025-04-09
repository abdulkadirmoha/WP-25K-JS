/* 
Kirjoita funktio nimeltä sumAndAverage:
- Pyydä käyttäjältä 10 numeroa
- Laske ja lokita konsoliin: 
    - Kaikkien numeroiden summa.
    - Annettujen numeroiden keskiarvo.
    - Suurin ja pienin numero
*/

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.

function sumAndAverage() {
    let summa = 0
    let count = 0
    let min = Infinity
    let max = -Infinity
    let userInput
    while( count <10){
        userInput = parseFloat(prompt("Enter number " + (count +1) + "  of 10"));

        if(isNaN(userInput)){
            alert("Enter valid numbers");
            continue
        }
        
        summa += userInput
        if (userInput < min) {
          min = userInput;
        }
        if (userInput > max) {
          max = userInput;
        }
        count++;
    }
    
    let average = summa / count
    console.log(`Numeroiden summa: ${summa}
Numeroiden keskiarvo: ${average}
Suurin numero: ${max}
Pienin numero: ${min}`);
}

sumAndAverage()