// Tee funktio logEvenNumbers, joka:
// - tulostaa kaikki parilliset kokonaisluvut 1 ja 99 välillä tällä kaavalla:  2, 98, 4, 96, ..., 50.
// - Tulosta luvut samalle riville konsolissa.

function logEvenNumbers(numerot = 0){
    while(numerot <= 100 ){
        if(numerot % 2 == 0 ){
            console.log(numerot)
        }
     numerot ++
    }
}

logEvenNumbers()