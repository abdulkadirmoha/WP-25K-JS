/* Tee funktio askToContinue, joka 
1. Kysyy käyttäjältä yhtä numeroa. 
2. Tämän jälkeen ohjelma kysyy: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
3. Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. 
4. Jos vastaus on 'e', ohjelma lopettaa. 
5. Lopetettuaan ohjelma laskee ja näyttää konsolissa kaikkien syötettyjen numeroiden keskiarvon.*/

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.

function askToContinue() {
  let i = 0;
  let sum = 0;
  let numbers = []

  while (true) {
    let userInput = parseFloat(prompt("Enter number"));
    

    if (isNaN(userInput)) {
        console.log("Enter valid numbers")
      continue;
   
    }

    sum += userInput;
    i++;
    //numbers.push(userInput);
    let continueInput = prompt("Haluatko jatkaa numeroiden antamista? (k/e)");
    if (continueInput === "k") {
        continue
    } 
    if(continueInput ==="e"){
        break

    } else{
        alert("enter k tai e")
    }
    
  }
 let averagage = sum / i;
  console.log("Entered numbers are :", averagage);
}
askToContinue()