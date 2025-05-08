/* Tehtävä 1
Luo olio `weather`, jossa on ominaisuudet `temperature`, `humidity` ja `condition` (esim. "Aurinkoinen", "Sateinen").
Kirjoita funktio, joka tulostaa `"Ota sateenvarjo!"` jos sää on sateinen.
*/
let tehtava = 1;

const weather = {
    temperature : 10,
    humidity : 70,
    condition : "sateinen"
}
const saas = (s) => {
    if(s.condition === "sateinen"){
        console.log("Ota sateenvarjo!")
    }
}
saas(weather)
/* Tehtävä 2
Määrittele olio nimeltä `shoppingCart`, joka sisältää taulukon tuotteista.
Jokaisella tuotteella on `name`, `price` ja `quantity`.
Kirjoita funktio, joka laskee kaikkien ostoskorin tuotteiden kokonaishinnan.
*/

const shoppingCart = [
  {
    name: "iphone 16",
    price: 1099,
    quantity: 1,
  },
  {
    name: "iphone 13",
    price: 600,
    quantity: 1,
  }
];
let total = 0;
const cartTotal = () => {
    for(let i = 0; i< shoppingCart.length; i++) {
        total += shoppingCart[i].price
    }
   console.log(total)
}
cartTotal()

/* Tehtävä 3
Luo taulukko nimeltä `restaurants`, jossa jokainen ravintola on olio, jolla on ominaisuudet `name`, `cuisineType` ja `rating`.
Kirjoita funktio, joka palauttaa vain ne ravintolat, joiden arvio on 4 tai enemmän.
*/

const restaurants = [
  {
    name: "Calafdoon",
    cuisineType: "Somali",
    rating: 3
  },
  {
    name: "Bella Italia",
    cuisineType: "Somali",
    rating: 4
  },
  {
    name: "Sakura Sushi",
    cuisineType: "Japanese",
    rating: 4
  }
];
const highRating = () => {
    for(let i = 0; i < restaurants.length; i++) {
        if(restaurants[i].rating >= 4){
            console.log(restaurants[i].name)
        }
    }
};
highRating()
/* Tehtävä 4
Määrittele olio nimeltä `bankAccount`, jossa on ominaisuudet `accountHolder`, `balance` ja `transactions` (numeroiden taulukko).
Kirjoita funktio, joka laskee kokonaissaldon kaikkien tapahtumien jälkeen.
*/

const bankAcount = {
    accountHolder : "Esapekka",
    balance : 200000,
    transsactions : [+200,+993, -100,-20,-4,-500]
}

const transactionsCalculator = (account) => {
    const totalTrans = account.transsactions.reduce((sum, transaction) => sum +transaction);
    return totalTrans

}
console.log("The total acount balance: ", transactionsCalculator(bankAcount))

/* Tehtävä 5
Luo taulukko `students`, jossa jokaisella opiskelijalla on `name`, `scores` (numeroiden taulukko) ja `averageScore` (aluksi null).
Kirjoita funktio, joka laskee ja päivittää kunkin opiskelijan `averageScore`-arvon.
*/


const students = [
  {
    name: "Esapekka",
    scores: [80, 90, 76],
    averageScore: null,
  },
  {
    name: "Abdulkadir",
    scores: [70, 76, 90],
    averageScore: null,
  },
  {
    name: "Ahmad",
    scores: [89, 86, 76],
    averageScore: null,
  },
];
const result = () => {
    students.forEach(student =>{
    const total = student.scores.reduce(
          (sum, score) => sum + score,
          0
        );
    const average = total / student.scores.length;
    student.averageScore = average
    })

}
result(students)
students.forEach((student) => {
  console.log(`${student.name}: ${student.averageScore.toFixed(2)}`);
});

/* Tehtävä 6
Määrittele taulukko nimeltä `courses`, jossa jokaisessa kurssissa on `courseName`, `instructor` ja `studentsEnrolled`.
Kirjoita funktio, joka tulostaa niiden kurssien nimet, joissa on yli 30 opiskelijaa.
*/


const courses = [
    {
        courseName: "Front-end development",
        instructor: "Laura",
        studentsEnrolled: 28
    },
    {
        courseName: "Back-end development",
        instructor: "Paavo",
        studentsEnrolled: 34
    }
]
courses.forEach(course =>{
    if(course.studentsEnrolled > 30) {
        console.log(course.courseName)
    }
})

/* Tehtävä 7
Luo olio `pet`, jossa on ominaisuudet `species`, `name` ja `isVaccinated`.
Kirjoita funktio, joka palauttaa `"Rokotusta tarvitaan"` jos lemmikkiä ei ole rokotettu.
*/


const pet = {
    species: "Kissa",
    name: "Rekku",
    isVaccinated: true
}
const petVacc = () => {
    if(pet.isVaccinated == true) {
        console.log("Rokotusta tarvitaan");
    }
}
petVacc()
/* Tehtävä 8
Määrittele olio nimeltä `city`, jossa on ominaisuudet `name`, `population` ja `landmark`.
Kirjoita funktio, joka tulostaa `"Tämä on suuri kaupunki!"` jos väkiluku ylittää 1 000 000.
*/


const city = {
    name: "Helsinki",
    population: 2000000
}
const cityPo = () => {
    if(city.population > 1000000) {
        console.log("Tämä on suuri kaupunki!")
    }
}
cityPo()
/* Tehtävä 9
Luo taulukko `transactions`, jossa jokainen tapahtuma on olio, jolla on `type` ("credit" tai "debit") ja `amount`.
Kirjoita funktio, joka laskee kokonaissaldon kaikkien tapahtumien jälkeen.
*/


const transactions = [
  { type: "credit", amount: 78 },
  { type: "debit", amount: 188 },
  { type: "credit", amount: 98 },
  { type: "debit", amount: 788 },
];

const transaction = (trans) =>{
    let balance = 0;
    trans.forEach(tra =>{
         if (tra.type === "credit") {
           balance += tra.amount;
         } else if (tra.type === "debit") {
           balance -= tra.amount;
         }
    })
   
    return balance
}
console.log(transaction(transactions));

/* Tehtävä 10
Määrittele olio nimeltä `foxPack`, joka sisältää taulukon kettuolioita.
Jokaisella ketulla on `name`, `age` ja `furColor`.
Kirjoita funktio, joka suodattaa ja palauttaa vain ne ketut, jotka ovat alle 2-vuotiaita.
*/

// Kirjoita koodisi tähän
const foxPack = {
   foxes: [
    {name: "foxy", age: 1, furColor: "red"},
    {naame: "Roxy", age: 3, furColor: "gray"}

    ],
};
const youngFox = (pack) => {
    return pack.foxes.filter((f) => f.age < 2);
}
console.log(youngFox(foxPack));
/* Tehtävä 11
Luo olio nimeltä `gameCharacter`, jolla on ominaisuudet `name`, `level`, `health` ja `inventory` (taulukko).
Kirjoita funktio, joka tulostaa hahmon koko varustelistan.
*/


const gameCharacter = {
    name: "Ritari",
    level: 4,
    health: 80,
    inventory: ["Miekka", "Kilpi", "Parantava juoma"]
};

const printInventory = (char) => {
    console.log(`${char.name} varusteet:`);
    char.inventory.forEach((item) => console.log("- " + item))
} 
printInventory(gameCharacter)
/* Tehtävä 12
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `role` ja `workingHours`.
Kirjoita funktio, joka etsii ja tulostaa ne työntekijät, jotka työskentelevät yli 40 tuntia viikossa.
*/
console.log("Tehtävä", tehtava++);

const employees = [
  { name: "Petra", role: "Dev", workingHours: 38 },
  { name: "Pekka", role: "QA", workingHours: 42 },
];

function overtimeStaff(list) {
  list.forEach((emp) => {
    if (emp.workingHours > 40) {
      console.log(emp.name);
    }
  });
}

overtimeStaff(employees); // Pekka

/* Tehtävä 13
Luo taulukko `musicAlbums`, jossa jokaisella albumilla on `title`, `artist` ja `releaseYear`.
Kirjoita funktio, joka tulostaa ne albumit, jotka on julkaistu vuoden 2000 jälkeen.
*/
console.log("Tehtävä", tehtava++);

const musicAlbums = [
  { title: "Album A", artist: "Artisti1", releaseYear: 1999 },
  { title: "Album B", artist: "Artisti2", releaseYear: 2005 },
];

function recentAlbums(albums) {
  albums.forEach((a) => {
    if (a.releaseYear > 2000) {
      console.log(a.title);
    }
  });
}

recentAlbums(musicAlbums); // Album B

/* Tehtävä 14
Määrittele taulukko nimeltä `cars`, jossa jokaisella autolla on `brand`, `model` ja `horsepower`.
Kirjoita funktio, joka etsii ja palauttaa auton, jolla on suurin hevosvoimamäärä.
*/
console.log("Tehtävä", tehtava++);

const cars = [
  { brand: "Volvo", model: "XC60", horsepower: 250 },
  { brand: "Ferrari", model: "488 GTB", horsepower: 660 },
];

function strongestCar(list) {
  return list.reduce((best, car) =>
    car.horsepower > best.horsepower ? car : best
  );
}

console.log(strongestCar(cars));

/* Tehtävä 15
Luo taulukko `airports`, jossa jokaisella lentokentällä on `name`, `country` ja `flightsPerDay`.
Kirjoita funktio, joka etsii lentokentän, jolla on eniten lentoja päivässä.
*/
console.log("Tehtävä", tehtava++);

const airports = [
  { name: "HEL", country: "Finland", flightsPerDay: 300 },
  { name: "JFK", country: "USA", flightsPerDay: 800 },
];

function busiestAirport(list) {
  return list.reduce((max, ap) =>
    ap.flightsPerDay > max.flightsPerDay ? ap : max
  );
}

console.log(busiestAirport(airports));
// { name: "JFK", country: "USA", flightsPerDay: 800 }