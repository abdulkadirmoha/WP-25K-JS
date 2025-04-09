/* Luo funktio nimeltä getLength, joka:
Ottaa yhden parametrin, str.
Palauttaa str:n pituuden käyttäen .length.
Kutsu funktiota merkkijonolla "JavaScript".
Tulosta tulos käyttäen console.log().
*/
//funktion

function getLength(str){
    return str.length
}

//Implisiitti funktio
const getLength = str => str.length;

console.log(getLength("Javascript"));