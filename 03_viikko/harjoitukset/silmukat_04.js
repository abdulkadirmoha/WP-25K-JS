// Tee funktio countEvenNumbers, joka pyytää käyttäjää syöttämään 20 lukua.
// Kun kaikki luvut on syötetty, ohjelman tulisi näyttää konsolissa montako
// näistä luvuista on parillisia.

// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.

function countEvenNumbers(){
    let i = 0
    let evenCount = 0
    while(i < 8) {
        let userInput = parseFloat(prompt("Enter 8 numbers"))
    
        if(isNaN(userInput)){
            alert("is not allowed")
            continue
        }
        if(userInput % 2 === 0){
           evenCount++
        }
    
        i ++


    }
    console.log("parallisia lukuja" + evenCount)
}

countEvenNumbers()