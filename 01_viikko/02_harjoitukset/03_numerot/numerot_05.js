/** Tehtävä: Ostoskori
 * Kuvitellaan, että olet kehittämässä yksinkertaista verkkokauppasovellusta. Sinun tehtäväsi on luoda ohjelma, joka laskee ostoskorissa olevien tuotteiden yhteishinnan ja tulostaa sen.
 * - Määrittele muuttujat kullekin ostoskorissa olevalle tuotteelle ja niiden hinnoille.
 * - Laske tuotteiden yhteishinta ja tallenna se muuttujaan, esimerkiksi yhteishinta.
 * - Tulosta yhteishinta konsoliin.
 */
let ostokori = [
  { tuote: "Televisio", hinta: 493 },
  { tuote: "Tietokone", hinta: 395 },
];

let yhteishinta = ostokori.reduce((sum,item) => sum + item.hinta,0);
console.log(`Òstoskorin yhteishinta: ${yhteishinta} €`);