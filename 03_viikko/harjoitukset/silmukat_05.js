// Tee funktio calculateAverageUntilZero, joka pyytää käyttäjää syöttämään numeroita,
// kunnes käyttäjä syöttää 0.
// Tässä vaiheessa ohjelma lopettaa toimintansa.
// Lopetettuaan ohjelman tulisi laskea ja näyttää konsolissa kaikkien syötettyjen
// numeroiden keskiarvo.

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.

function calculateAverageUntilZero(){
    let i = 0
    let sum = 0
    
    while(true){
    let userInput = parseFloat(prompt("Enter number"));

    if(userInput === 0){
        break
    }
    if(isNaN(userInput)){
        alert("Enter only numbers")
        continue

    } 
  
    sum += userInput
    i ++
  
}
        let averagage = sum / i
        console.log(averagage)

   
}
calculateAverageUntilZero()
        