/* Määritä kolme merkkijonovakiota käyttäen yksinkertaisia lainausmerkkejä, kaksoislainausmerkkejä ja backtick-merkkejä. Esimerkiksi:
'Yksinkertaisilla lainausmerkeillä merkitty merkkijono'
"Kaksoislainausmerkeillä merkitty merkkijono"
`Mallimerkkijono`
Tulosta kaikki kolme merkkijonoa käyttäen console.log().
*/

const a = 'Yksinkertaisilla lainausmerkeillä merkitty merkkijono';
const b = "Kaksoislainausmerkeillä merkitty merkkijono";
const c = `Mallimerkkijono`;

console.log(`
    '${a}'
    "${b}"
    \`${c}\`
    `);
