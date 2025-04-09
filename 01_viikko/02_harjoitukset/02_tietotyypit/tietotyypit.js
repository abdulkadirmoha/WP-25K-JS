/*
- Luo muuttuja nimeltään age ja anna sille kokonaislukuarvo.
- Luo muuttuja nimeltään name ja anna sille merkkijonoarvo.
- Luo muuttuja nimeltään isStudent ja anna sille totuusarvo (boolean).
- Luo muuttuja nimeltään hobbies ja anna sille taulukko, joka sisältää muutamia merkkijonoarvoja (esim. harrastukset).
- Luo info-olio eli objekti, jossa on kaksi ominaisuutta: schoolName (merkkijono) ja grade (kokonaisluku).

- Käytä console.log() -metodia tulostamaan jokainen muuttuja konsoliin.

- Käytä typeof-operatoria tarkistaaksesi jokaisen muuttujan tietotyypin ja tulosta tulos console.log()-metodilla.
*/

let age = 39;
let name = "Abdi";
let isStudent = true;
let hobbies = ["Traveling", "Sports", "Reading"];

const info = {
  schoolName: "Merkkijono",
  grade: 10,
};

console.log(`
Student Name       : ${name}
Age               : ${age}
School Name       : ${info.schoolName}
Grade             : ${info.grade}
Is Enrolled       : ${isStudent ? "Yes" : "No"}
Student Hobbies   : ${hobbies.join(", ")}
`);

