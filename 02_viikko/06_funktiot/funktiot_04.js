/* Luo funktio nimeltä capitalize, joka:
Ottaa yhden parametrin, str.
Palauttaa merkkijonon siten, että ensimmäinen kirjain on iso ja loput pieniä.
Kutsu funktiota merkkijonolla "javascript".
Tulosta tulos käyttäen console.log().

Vinkki: Käytä str[0].toUpperCase() ja str.slice(1).toLowerCase().
*/

const capitalize = (str) => str[0].toUpperCase();
const capitalizeSlice = (str) => str.slice(1).toLowerCase()

console.log(capitalizeSlice("javascipt"));
console.log(capitalize("javascipt"));