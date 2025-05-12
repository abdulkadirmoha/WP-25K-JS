/* Tehtävä 1
Luo konstruktori-funktio `User`, joka ottaa parametreina `username` ja `email`.
Sen tulee luoda olio, jolla on nämä ominaisuudet sekä metodi `showInfo`, joka tulostaa käyttäjän tiedot.
Luo uusi käyttäjä ja kutsu `showInfo()`.
*/
function User(username, email){
    this.username = username;
    this.email = email;
    this.showInfo = function () {
        console.log(`käyttäjä: ${this.username}, sähköposti: ${this.email}`);
    }
}
const u1 = new User("abdulkadir", "abulkadir@example.com")
u1.showInfo()
/* Tehtävä 2
Muokkaa tehtävää 1: Käytä ES6 `class`-syntaksia `User`-luokan määrittelyyn.
Lisää metodi `changeEmail(newEmail)`, joka päivittää käyttäjän sähköpostiosoitteen.
*/
class User2 {
    constructor (username, email) {
        this.username = username;
        this.email = email;
    }
    showInfo() {
        console.log(`${this.username} ${this.email}`)
    }
    changeEmail(newEmail) {
        this.email = newEmail;
        console.log(`updated email: ${this.email}`);
    }
}
const u2 = new User2("abdi", "abdi@example.com");
u2.showInfo();
u2.changeEmail("abdul@example.com")
u2.showInfo
/* Tehtävä 3
Luo olio `theme`, jolla on ominaisuudet `name` (light tai dark) ja `isActive`.
Lisää HTML:ään painike. Kun sitä klikataan, vaihdetaan teema light ↔ dark ja päivitetään `isActive`-arvo.
*/
const theme = { name: "light", isActive: true };
const themeButton = document.getElementById("themeBtn");
themeButton.addEventListener("click", () =>  {
  if (theme.name === "light") {
    theme.name = "dark";
  } else {
    theme.name = "light";
  }
  if ((theme, name === "dark")) {
    theme.isActive = true;
  } else {
    theme.isActive = false;
  }
  document.body.setAttribute("data-theme", theme.name);
});


/* Tehtävä 4
Luo olio `counter`, jolla on ominaisuus `value`.
Lisää HTML:ään kaksi painiketta: toinen kasvattaa `value`, toinen pienentää.
Näytä `value` HTML-elementissä ja päivitä se reaaliaikaisesti painikkeiden avulla.
*/

const counter = { value: 0 };

const elVal = document.getElementById("val");
document.getElementById("inc").addEventListener("click", () => {
  counter.value++;
  elVal.textContent = counter.value;
});
document.getElementById("dec").addEventListener("click", () => {
  counter.value--;
  elVal.textContent = counter.value;
});

/* Tehtävä 5
Luo olio `product`, jolla on `name`, `price` ja `quantity`.
Lisää HTML:ään syöttökenttä, johon käyttäjä voi syöttää ostettavan määrän.
Päivitä `quantity` ja näytä kokonaishinta dynaamisesti.
*/
// const product = {
//   name : "men shoes",
//   price: 40,
//   quantity: null
// }
// let itemName = document.getElementById("itemName");
// let itemPirce = document.getElementById("itemPrice");
// let quantityInput = document.getElementById("qty");
// itemName = product.name;
// itemPirce = product.price;

// const updatePrice = () => {
//   const qty = parseInt(quantityInput.value,10);
// }
// if(quaty >= 1 ){
//   product.quantity = qty
//   let  totalPrice = product.price * qty
//   document.getElementById("total").textContent = totalPrice
// } else if (quaty< 0){
//   alert("qauantity should be 1 or more")
// }
// quantityInput.addEventListener("input", updatePrice)

/* Tehtävä 6
Määrittele konstruktori `Task`, joka ottaa `title`, `description` ja `completed`.
Lisää HTML:ään painike, jota painamalla lisätään uusi `Task`-olio `tasks`-taulukkoon ja näytetään se sivulla.
*/

// Kirjoita koodisi tähän

/* Tehtävä 7
Luo olio `weatherApp`, jossa on metodi `fetchWeather(city)`.
Käytä `fetch`-funktiota hakeaksesi säätietoja API:sta ja näytä ne HTML-elementissä.
(API: OpenWeather tai jokin muu ilmainen sää-API)
*/

// Kirjoita koodisi tähän

/* Tehtävä 8
Luo konstruktori-funktio `Car`, joka ottaa `brand`, `model` ja `year`.
Lisää konstruktoriin metodi `age()`, joka laskee auton iän.
Luo uusi `Car`-olio ja näytä sen ikä verkkosivulla.
*/

// Kirjoita koodisi tähän

/* Tehtävä 9
Luo taulukko `users`, jossa jokaisella käyttäjällä on `name` ja `score`.
Lisää HTML:ään painike, joka lajittelee käyttäjät pistemäärän mukaan laskevasti ja päivittää näkyvän listan.
*/

// Kirjoita koodisi tähän

/* Tehtävä 10
Luo olio `shoppingList`, jolla on taulukko `items`.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia tuotteita `items`-taulukkoon ja päivittää näkyvän listan.
*/
const posts = [
  { title: "Hei maailma", content: "Ensimmäinen postaus", likes: 0 },
  { title: "Toinen", content: "Jatketaan", likes: 2 },
];

function renderPosts() {
  const ul = document.getElementById("posts");
  ul.innerHTML = "";
  posts.forEach((p, i) => {
    const li = document.createElement("li");
    li.innerHTML =
      `<h3>${p.title}</h3><p>${p.content}</p>` +
      `<button data-id="${i}">Tykkää (${p.likes})</button>`;
    ul.appendChild(li);
  });
  ul.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const idx = parseInt(e.target.dataset.id, 10);
      posts[idx].likes++;
      renderPosts();
    });
  });
}
renderPosts()

/* Tehtävä 11
Luo taulukko `posts`, jossa jokaisella postauksella on `title`, `content` ja `likes`.
Lisää jokaisen postauksen viereen "Tykkää"-painike, joka kasvattaa `likes`-määrää ja päivittää näkymän.
*/


/* Tehtävä 12
Luo konstruktori-funktio `Employee`, jolla on `name`, `position` ja `salary`.
Lisää metodi `increaseSalary(percent)`, joka kasvattaa palkkaa annetulla prosentilla.
Luo työntekijä ja nosta hänen palkkaansa dynaamisesti.
*/
class Employee {
  constructor(name, possition, salary) {
    this.name = name;
    this.possition = possition;
    this.salary = salary;
  }
  increaseSalary(percentage) {
    this.salary *= percentage;
  }
  getInfo() {
    console.log(`
      Emoloyee name: ${emp.name} Possition: ${emp.possition} Salary: ${emp.salary}
      `);
  }
}
const emp = new Employee("abdulkadir", "Data Analayst", 4000);
emp.getInfo();
emp.increaseSalary(1.15);
emp.getInfo();

/* Tehtävä 13
Luo olio `timer`, jolla on `seconds` ja metodi `start()`, joka laskee sekunteja ylöspäin.
Näytä ajastin HTML-elementissä ja päivitä se sekunnin välein.
*/
const timer = {
  second: 0,
  start() {
    if(this.intervalId) return ;
    this.intervalId = setInterval(() => {
      this.second ++;
      document.getElementById("timer").textContent = this.second;

    },1000)
  },
  stop() {
  clearInterval(this.intervalId);
  this.intervalId = null
}
};

document.getElementById("start").addEventListener("click", () => {
  console.log("start button clickec");
  timer.start();
});
document.getElementById("stop").addEventListener("click", () => {
  console.log("stop button clicked");
  timer.stop();
});

/* Tehtävä 14
Luo konstruktori-funktio `Book`, joka ottaa parametreina `title`, `author` ja `pages`.
Luo yksinkertainen kirjastosovellus, jonka avulla käyttäjät voivat lisätä kirjoja HTML-lomakkeen kautta ja näyttää ne dynaamisesti.
*/

class Book{
  constructor(nimi, kirjaillija, sivut){
    this.nimi = nimi;
    this.kirjaillija = kirjaillija;
    this.sivut = sivut
  }
}
document.getElementById("bookForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const bookName = document.getElementById("t").value;
  const author = document.getElementById("a").value;
  const pages = document.getElementById("p").value;

  const book = new Book(bookName, author, pages);
  const li = document.createElement("li");
  li.textContent = `${book.nimi} by ${book.kirjaillija} ${book.sivut}`;
  document.getElementById("books").appendChild(li);

  e.target.reset();

})

/* Tehtävä 15
Luo olio `foxTracker`, jolla on `foxes`-taulukko.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia kettuja (nimi ja sijainti) taulukkoon.
Näytä kettujen lista dynaamisesti HTML-elementissä.
*/

const foxTracker = {
  foxes: []
}
document.getElementById("addFox").addEventListener("click", () =>{
  const name = document.getElementById("name").value;
  const location = document.getElementById("loc").value;

  if(name && location ) {
    foxTracker.foxes.push(name, location);

    const li = document.createElement("li")
    li.textContent = `${name} @ ${location}`;
    document.getElementById("foxes").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("loc").value = "";

  }
});