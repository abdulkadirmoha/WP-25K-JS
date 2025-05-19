const animals = [];
let filteredAnimals = [];

const render = (list) => {
  const container = document.querySelector(".animalList");
  let html = "";

  list.forEach((animal) => {
    html += `
      <div class="animal-card">
        <div class="name">${animal.name}</div>
        <div class="type">${animal.type}</div>
      </div>
    `;
  });

  container.innerHTML = html;

  const resultBox = document.getElementById("searchResult");
  resultBox.textContent = list.length === 0 ? "Ei tuloksia" : "";
};

const filterAnimals = () => {
  const searchValue = document
    .getElementById("searchAnimal")
    .value.trim()
    .toLowerCase();
  const filterValue = document.getElementById("filterType").value;

  filteredAnimals = animals.filter((animal) => {
    const nameMatch = animal.name.toLowerCase().includes(searchValue);
    const typeMatch = filterValue === "Kaikki" || animal.type === filterValue;
    return nameMatch && typeMatch;
  });

  render(filteredAnimals);
};

const addNewAnimal = () => {
  const animalName = document.getElementById("newAnimalName");
  const animalType = document.getElementById("newAnimalType");

  const name = animalName.value.trim();
  const type = animalType.value;

  if (!name || !type) return;

  animals.push({ name, type });

  animalName.value = "";
  animalType.value = "Nisäkäs";

  filterAnimals(); // Recalculate and display
};

// 🔁 Set up event listeners (once only!)
document
  .getElementById("searchAnimal")
  .addEventListener("input", filterAnimals);
document.getElementById("filterType").addEventListener("change", filterAnimals);

document.getElementById("sortAnimals").addEventListener("click", () => {
  filteredAnimals.sort((a, b) =>
    a.name.localeCompare(b.name, "fi", { sensitivity: "base" })
  );
  render(filteredAnimals);
});
