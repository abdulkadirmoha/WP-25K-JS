let animals = [];

const render = () => {
  const container = document.querySelector(".animalList"); // fixed: match HTML
  let html = "";

  animals.forEach((animal, i) => {
    html += `
      <div class="animal-card">
        <div><strong>Nimi:</strong> ${animal.animalName}</div>
        <div><strong>Tyyppi:</strong> ${animal.animalType}</div>
        <button class="delete-btn" onclick="deleteAnimal(${i})">Poista</button>
      </div>
    `;
  });

  container.innerHTML = html;
};

function deleteAnimal(index) {
  animals.splice(index, 1);
  render();
}

const addNewAnimal = () => {
  const inputAnimal = document.getElementById("newAnimalName");
  const animalTypeSelect = document.getElementById("newAnimalType");

  const animalName = inputAnimal.value.trim();
  const animalType = animalTypeSelect.value;

  if (animalName === "") return; // prevent empty name

  animals.push({ animalName, animalType });

  inputAnimal.value = "";
  animalTypeSelect.value = "";

  render();
};

const searchAnimal = () => {
  const searchInput = document.getElementById("searchAnimal");
  const searchValue = searchInput.value.trim().toLowerCase();

  const filterSelect = document.getElementById("filterType");
  const filterValue = filterSelect.value;

  const resultBox = document.getElementById("searchResult");

  const found = animals.some((animal) => {
    const nameMatch = animal.animalName.toLowerCase().includes(searchValue);
    const typeMatch =
      filterValue === "Kaikki" || animal.animalType === filterValue;
    return nameMatch && typeMatch;
  });

  resultBox.textContent = found ? "Found ✅" : "Not found ❌";
};
