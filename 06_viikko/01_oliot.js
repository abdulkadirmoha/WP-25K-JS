/* Tehtävä 1
Luo JavaScript-taulukko nimeltä `library`, joka edustaa kirjakokoelmaa.
Jokaisella kirjalla tulee olla ominaisuudet `title` (otsikko), `author` (kirjoittaja) ja `yearPublished` (julkaisuvuosi).
Lisää kokoelmaan vähintään kaksi kirjaoliota.
*/

// Kirjoita koodisi tähän
const library = [
  {
    title: "Kuolema ja Pingviini",
    author: "kurkova, Andrei",
    yearPublished: 1996,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1926,
  },
];

/* Tehtävä 2
Hae `library`-kokoelman ensimmäisen kirjan `title` ja tulosta se konsoliin.
Muokkaa toisen kirjan `yearPublished` uudeksi vuodeksi ja tulosta päivitetty kirja konsoliin.
*/

// Kirjoita koodisi tähän
// console.log(library[0].title)
// console.log(library[1].yearPublished = 1926);

/* Tehtävä 3
Käytä piste-notaatiota lisätäksesi uuden ominaisuuden `genres` (merkkijonotaulukko) ensimmäiseen kirjaan `library`-taulukossa.
Käytä hakasulkunotaatiota lisätäksesi boolean-tyyppisen ominaisuuden `isAvailable`, joka kertoo onko kirja saatavilla.
*/
library[0] ="genres";
library[0] = ["Absurdi", "Tragikomiikka"]

// console.log(library[0])
// Kirjoita koodisi tähän


/* Tehtävä 4
Määrittele konstruktori-funktio nimeltä `Book`, joka luo uusia kirjoja, joilla on `title`, `author`, `yearPublished` ja `genres`.
Luo uusi kirjaolio `Book`-konstruktorilla ja lisää se `library`-kokoelmaan.
*/

// Kirjoita koodisi tähän
class Book {
  constructor(title, author, yearPublished, genres) {
    (this.title = title),
      (this.author = author),
      (this.yearPublished = yearPublished),
      (this.genres = genres);
  }
}
const kirja1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Historical Fiction ");
library.push(kirja1)
// console.log(library)
/* Tehtävä 5
Kirjoita funktio nimeltä `createBook`, joka ottaa parametreina `title`, `author`, `yearPublished` ja `genres` (taulukko).
Funktion tulee palauttaa uusi kirjaolio näillä ominaisuuksilla.
Testaa `createBook`-funktiota luomalla uusi kirja käyttäjän antamilla arvoilla ja tulosta se konsoliin.
*/

// Kirjoita koodisi tähän
const createBook = (titel,author,yearPublished,genres) => {
  return {
    titel,
    author,
    yearPublished,
    genres
  }
}
// const title = prompt("Enter a book title");
// const author = prompt("Enter book author");
// const yearPublished = prompt("Enter year published");
// const genres = prompt("Enter book genres");
// const newBook = createBook(title,author,yearPublished,genres);
// console.log(newBook);

/* Tehtävä 6
Muunna `library`-kokoelma JSON-merkkijonoksi ja tulosta se konsoliin.
Jäsennä JSON-merkkijono takaisin JavaScript-olioksi ja tulosta ensimmäisen kirjan `title` konsoliin.
*/


// Kirjoita koodisi tähän


/* Tehtävä 7
Luo taulukko nimeltä `students`, jossa jokaisella oppilaalla on `name`, `age` ja `grade`.
Tulosta niiden oppilaiden nimet, joiden arvosana on yli 90.
*/

// Kirjoita koodisi tähän
const students = [
  { name: "Ahmad", age: 23, grade: 78 },
  { name: "Manhal", age: 33, grade: 88 },
  { name: "Abdulkadir", age: 29, grade: 98 },
  { name: "Ali", age: 43, grade: 100 },
];

let highGrades = students.filter(student => student.grade > 90 );
highGrades.forEach(topStudent => {
  console.log(topStudent.name)
})

/* Tehtävä 8
Määrittele olio nimeltä `car`, jossa on ominaisuudet `brand`, `model`, `year` ja `isElectric`.
Käytä funktiota tarkistamaan onko auto sähköinen. Jos on, tulosta `"This car is eco-friendly!"`, muussa tapauksessa `"This car runs on fuel."`
*/
const car = [
  { Brand: "Tesla", Model: "Model 3", Year: 2023, isElectric: true },
  { Brand: "Ford", Model: "Mustang Mach-E", Year: 2022, isElectric: true },
  { Brand: "Toyota", Model: "Corolla", Year: 2010, isElectric: false },
  { Brand: "BMW", Model: "i4", Year: 2023, isElectric: true },
  { Brand: "Honda", Model: "Civic", Year: 2020, isElectric: false },
];
// console.log(
//   car.isElectric ? "This car is eco-friendly!" : "This car runs on fuel."
// );
car.forEach(ca => {
  
  if(ca.isElectric == true){
    console.log(`${ca.Brand} ${ca.Model}: This car is eco-friendly! `);
  } else {
    console.log(`${ca.Brand} ${ca.Model}: This car runs on fuel.`);
  }
})
// Kirjoita koodisi tähän
/* Tehtävä 9
Luo `movies`-taulukko, jossa jokainen elokuva on olio, jolla on ominaisuudet `title`, `director` ja `rating`.
Kirjoita silmukka, joka tulostaa kaikkien niiden elokuvien otsikot, joiden arvio on yli 8.
*/

// Kirjoita koodisi tähän

const movies = [
  {
    title: "The Shawshank Redemption ",
    director: "Frank Darabont",
    rating: 9
  },
  {
    title: "Inception ",
    director: "Christopher Nolan",
    rating: 8,
  },
  {
    title: "Parasite ",
    director: "Bong Joon-ho",
    rating: 7,
  },
];
for(let i= 0; i < movies.length; i++ ){
  if(movies[i].rating > 8 ){
    console.log(movies[i].title)
  }
}

/* Tehtävä 10
Kirjoita funktio `findOldestCar`, joka ottaa vastaan taulukon auto-olioita ja palauttaa auton, jolla on varhaisin `year`.
*/

// Kirjoita koodisi tähän
const findOldestCar = () => {
  for(let i = 0; i< car.length; i++) {
    if(car[i].Year< 2020){
      console.log(car[i].Brand,car[i].Model,"is an old car")
    }
  }
}
findOldestCar()
/* Tehtävä 11
Määrittele `userProfiles`-taulukko, joka sisältää käyttäjäolioita.
Jokaisella käyttäjällä tulee olla `username`, `email` ja `isAdmin` -ominaisuudet.
Kirjoita funktio, joka suodattaa ja palauttaa vain ne käyttäjät, jotka ovat ylläpitäjiä.
*/

// Kirjoita koodisi tähän
const userProfiles = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    isAdmin: true,
  },
  {
    name: "ahmad",
    email: "warya.ahmad@example.com",
    isAdmin: false
  },
  {
    name: "Abdulkadir",
    email: "abdi@example.com",
    isAdmin: true
  },
  {
    name: "Manhal",
    email: "manhal@example.com",
    isAdmin: false
  }
];
const admins = userProfiles.filter(user => user.isAdmin === true);
console.log(admins)


/* Tehtävä 12
Määrittele taulukko nimeltä `orders`, jossa jokaisella tilauksella on `orderId`, `customerName`, `totalAmount` ja `status` ("pending" tai "completed").
Kirjoita funktio, joka palauttaa vain valmiit tilaukset.
*/

// Kirjoita koodisi tähän
const order = [
  {
    orderId: 3903,
    customerName: "Ahmad",
    totalAmount: 89,
    status: "completed",
  },
  {
    orderId: 3904,
    customerName: "Manhal",
    totalAmount: 69,
    status: "pending",
  },
];
const orderInfo = order.filter(or => or.status === "completed");
console.log(orderInfo)
/* Tehtävä 13
Luo olio nimeltä `smartphone`, jolla on ominaisuudet `brand`, `model`, `batteryLife` ja `is5GEnabled`.
Kirjoita funktio, joka tulostaa `"This phone supports 5G!"` jos `is5GEnabled` on `true`, muussa tapauksessa tulostaa `"This phone does not support 5G."`
*/

// Kirjoita koodisi tähän
const smartphone = [
  {
  brand: "iphone",
  model: "iphone 14",
  batteryLife: "5h",
  is5GEnabled: true
  },
  {
  brand: "Samsung",
  model: "Gallex 21s",
  batteryLife: "5h",
  is5GEnabled: false
  }
];
const smartphoneFunction = () =>{
  smartphone.forEach(phone => {
      if (smartphone.is5GEnabled === true) {
        console.log(phone.model, "This phone supports 5G!");
      } else {
        console.log(phone.model, "This phone does not support 5G.");
      }

  });

};
smartphoneFunction()

/* Tehtävä 14
Määrittele olio nimeltä `fox`, jolla on ominaisuudet `name`, `age` ja `habitat`.
Kirjoita funktio, joka tulostaa `"This fox is young"` jos ikä on alle 3, ja `"This fox is an adult"` jos 3 tai enemmän.
*/

// Kirjoita koodisi tähän
const fox = {
  name: "namfox",
  age : 4,
  habitat : "esa"
}
const animal = () => {
  if(fox.age > 3) {
    console.log("This fox is an adult");
  } else {
    console.log("This fox is young");
  }
}
animal()
/* Tehtävä 15
Määrittele taulukko nimeltä `employees`, jossa jokaisella työntekijällä on `name`, `position` ja `salary`.
Kirjoita funktio, joka laskee kaikkien työntekijöiden yhteenlasketun palkan.
*/

// Kirjoita koodisi tähän
const emoloyees = [
  {
    name: "Anna Korhonen",
    position: "Ohjelmistokehittäjä",
    salary: 4200,
  },
  {
    name: "Liisa Laine",
    position: "Graafinen suunnittelija",
    salary: 3700,
  },
  {
    name: "Pekka Niemi",
    position: "IT-tukihenkilö",
    salary: 3200,
  }
];

const totalSalary = () => {
  let total = 0
  emoloyees.forEach(sa => {
  total += sa.salary
  });
  return total
}
console.log(totalSalary())