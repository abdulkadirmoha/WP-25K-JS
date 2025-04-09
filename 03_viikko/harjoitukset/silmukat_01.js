//Tee funktio nimeltä logOddNumbers:
// - Se tulostaa konsoliin kaikki parittomat numerot 1 ja 100 välillä.
// Eli 1, 3, 5, 7, 9, 11 jne. lukuun 99 asti.

function logOddNumbers(numerot = 1)

{
    while(numerot <= 100){
      if(numerot % 2 != 0){
        console.log(numerot)

      }
    numerot ++;
    }
}
logOddNumbers()