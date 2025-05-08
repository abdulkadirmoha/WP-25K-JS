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

// Kirjoita koodisi tähän

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

// Kirjoita koodisi tähän

/* Tehtävä 11
Luo taulukko `posts`, jossa jokaisella postauksella on `title`, `content` ja `likes`.
Lisää jokaisen postauksen viereen "Tykkää"-painike, joka kasvattaa `likes`-määrää ja päivittää näkymän.
*/

// Kirjoita koodisi tähän

/* Tehtävä 12
Luo konstruktori-funktio `Employee`, jolla on `name`, `position` ja `salary`.
Lisää metodi `increaseSalary(percent)`, joka kasvattaa palkkaa annetulla prosentilla.
Luo työntekijä ja nosta hänen palkkaansa dynaamisesti.
*/

// Kirjoita koodisi tähän

/* Tehtävä 13
Luo olio `timer`, jolla on `seconds` ja metodi `start()`, joka laskee sekunteja ylöspäin.
Näytä ajastin HTML-elementissä ja päivitä se sekunnin välein.
*/

// Kirjoita koodisi tähän

/* Tehtävä 14
Luo konstruktori-funktio `Book`, joka ottaa parametreina `title`, `author` ja `pages`.
Luo yksinkertainen kirjastosovellus, jonka avulla käyttäjät voivat lisätä kirjoja HTML-lomakkeen kautta ja näyttää ne dynaamisesti.
*/

// Kirjoita koodisi tähän

/* Tehtävä 15
Luo olio `foxTracker`, jolla on `foxes`-taulukko.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia kettuja (nimi ja sijainti) taulukkoon.
Näytä kettujen lista dynaamisesti HTML-elementissä.
*/

// Kirjoita koodisi tähän
