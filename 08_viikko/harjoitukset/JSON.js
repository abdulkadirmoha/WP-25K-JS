/* Tehtävä 1
Luo JavaScript-olio nimeltä `student`, jolla on ominaisuudet:
- `name`
- `age`
- `grade`
Muunna olio JSON-merkkijonoksi ja tulosta se konsoliin.
*/

const studnet = {
    name : "Abdulkadir",
    age : 29,
    grade: 98
}
const jsonString = JSON.stringify(studnet);
console.log(jsonString);

/* Tehtävä 2
Ota Tehtävä 1:ssä luotu JSON-merkkijono ja muunna se takaisin JavaScript-olioksi.
Tulosta muunnetun olion `name`-ominaisuus.
*/

console.log(JSON.parse(jsonString))

/* Tehtävä 3
Luo taulukko nimeltä `classroom`, jossa jokainen alkio on opiskelijaa kuvaava olio.
Jokaisella opiskelijaoliolla tulee olla ominaisuudet `name`, `age` ja `grade`.
Muunna taulukko JSON-merkkijonoksi ja tulosta se konsoliin.
*/

const classroom = [
  { name: "abdulkadir", age: 29, grade: 87 },
  { name: "esapekka", age: 25, grade: 97 },
];
const jnosClassroom = JSON.stringify(classroom);
console.log(jnosClassroom)

/* Tehtävä 4
Ota Tehtävä 3:ssa luotu JSON-merkkijono, muunna se takaisin JavaScript-taulukoksi
ja tulosta kaikkien opiskelijoiden nimet.
*/
console.log(JSON.parse(jnosClassroom));


/* Tehtävä 5
Luo olio nimeltä `weatherReport`, jossa on seuraavat ominaisuudet:
- `temperature`
- `humidity`
- `conditions` (esim. "Sunny", "Rainy")

Muunna olio JSON-merkkijonoksi ja tallenna se muuttujaan `weatherJSON`.
Sen jälkeen pura JSON takaisin olioksi ja tulosta `conditions`-ominaisuus.
*/
const weatherReport = {
    temperature: 24,
    humidity: 78,
    conditions: "sunny"

}
const weatherJSON = JSON.stringify(weatherReport);
const parseWeather = JSON.parse(weatherJSON);
console.log(parseWeather.conditions)

/* Tehtävä 6
Määrittele taulukko nimeltä `movies`, jossa jokaisella elokuvalla on:
- `title`
- `director`
- `rating`

Muunna tämä taulukko JSON-merkkijonoksi ja pura se takaisin JavaScript-olioksi.
Tulosta kaikki elokuvien nimet, joiden arvosana on yli 8.
*/
const movies = [
  { title: "Inception", director: "Christopher Nolan", rating: 4 },
  { title: "Parasite", director: "Bong Joon-ho", rating: 6 },
  { title: "The Godfather", director: "Francis Ford Coppola", rating: 9 },
  { title: "Interstellar", director: "Christopher Nolan", rating: 7 },
  { title: "Spirited Away", director: "Hayao Miyazaki", rating: 5 },
];
const moviesJSON = JSON.stringify(movies);
const parseMovies = JSON.parse(moviesJSON);
parseMovies.forEach((movie =>{
  if(movie.rating > 8) {
    console.log(movie.title)
    
  }
}))
/* Tehtävä 7
Kirjoita funktio `filterHighRatedMovies(jsonString)`, joka:
- Ottaa vastaan JSON-merkkijonon, joka edustaa elokuvataulukkoa.
- Muuntaa sen JavaScript-taulukoksi.
- Palauttaa uuden taulukon, joka sisältää vain elokuvat, joiden arvosana on yli 8.
*/
const filterHighRatedMovies = (jnosString) => {
  const movieArray = JSON.parse(jnosString);
  const highRatedMovie = movieArray.filter(movie =>movie.rating > 8 )
    return highRatedMovie

} 
const movieString = JSON.stringify(movies);
const result = filterHighRatedMovies(movieString);
console.log("result ",result)


/* Tehtävä 8
Määrittele olio nimeltä `shoppingCart`, jossa on:
- `items` (taulukko tuotteista, jokaisella on `name` ja `price`)
Muunna `shoppingCart` JSON-merkkijonoksi ja tulosta se konsoliin.
*/

const shoppingCart = {
  items: [
    { name: "iphone", price: 989 },
    { name: "iphone15", price: 999 },
  ],
};
const cartJNOS = JSON.stringify(shoppingCart);
console.log(cartJNOS)

/* Tehtävä 9
Kirjoita funktio `totalCartValue(jsonString)`, joka:
- Saa parametrina ostoskorin JSON-merkkijonon.
- Muuntaa sen JavaScript-olioksi.
- Palauttaa ostoskorin kaikkien tuotteiden yhteenlasketun hinnan.
*/

const totalCartValue = (jnosString) => {
    const cartOb = JSON.parse(cartJNOS);

    let total = 0;
    cartOb.items.forEach(item => {
        total += item.price
        
    });
    return total
}
console.log(totalCartValue())
/* Tehtävä 10
Luo olio nimeltä `gameProgress`, jossa on:
- `level`
- `score`
- `livesRemaining`

Muunna olio JSON-merkkijonoksi ja tulosta se.
Pura JSON takaisin olioksi ja päivitä `score`-ominaisuutta lisäämällä siihen 100 pistettä.
Tulosta päivitetty olio.
*/

// Kirjoita koodi tähän
