animals = [];

const render = () => {
    let animalHTMl = ""
    for(let i= 0; i< animals.length; i++) {
        const animalObj = animals[i];
        const { animalName, animalType } = animalObj;

        const html = `
        <div>${animalName}</div>
        <div>${animalType}</div>
        <button onclick="deleteAnimal(${i})">Delete</button>
        `;
        animalHTMl += html
    }
    document.querySelector(".animalList").innerHTML = animalHTMl;
}
function deleteAnimal(index) {
  animals.splice(index, 1);
  render();
}

const addNewAnimal= () => {
    let inputAnimal = document.getElementById("newAnimalName");
    let animalTypeValue = document.getElementById("newAnimalType");
    const animalType = animalTypeValue.value
    const animalName = inputAnimal.value;
    animals.push({
      animalName,
      animalType,
    });
    console.log(animals);
    inputAnimal.value = "";
    animalTypeValue.value = "";
    render()

} 

const searchAnimal = () => {
    let searchInput = document.getElementById("searchAnimal");
    const searchValue = searchInput.value;
    let searchfitlter = document.getElementById("filterType");
    const filterValue = searchfitlter.value;

    const found = animals.some(animal =>{
        const nameMatch = animal.animalName.toLowerCase().includes(searchValue);
        const typeMatch = filterValue === "" || animal.animalType === filterValue;
        return nameMatch && typeMatch;
    });
     const resultBox = document.getElementById("searchResult");
     resultBox.textContent = found ? "Found ✅" : "Not found ❌";
}
