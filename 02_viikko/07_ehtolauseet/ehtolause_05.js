/* 
Kirjoita funktio nimeltä checkAnimal:
Ota parametri animalType.

Käytä ternary operatoria palauttamaan:
- "Sinulla on fiksu seuralainen!" jos animalType on "fox".
- "Ei kettu, mutta silti kiva!" muussa tapauksessa.

Kutsu funktiota arvoilla kuten "fox" ja "cat".
*/

function checkAnimal(animalType){
    if(animalType == "fox"){
        console.log("Sinulla on fiksu seuralainen!");
    } else{
        console.log("Ei kettu, mutta silti kiva!");
    }
}

checkAnimal("cat")
checkAnimal("fox")