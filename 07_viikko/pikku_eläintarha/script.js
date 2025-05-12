const animals = [];

const render = () => {
    const container = document.querySelector(".animalList");
    let html = "";

    animals.forEach((animal, i) => {
    html += `
      <div class="animal-card">
        <div><strong>Animal name:</strong> ${animal.name}  
        <strong>Animal type:</strong> ${animal.type}
        <button onclick= "deleteAnimal(${i})">Delete</button>
        </div>
        
        </div>
    `;
    });
    container.innerHTML = html;
    
 
}
function deleteAnimal(index) {
    animals.splice(index,1);
    render()
}



addNewAnimal = () => {
    const animalName = document.getElementById("newAnimalName");
    const animalType = document.getElementById("newAnimalType");

    const name = animalName.value;
    const type = animalType.value;

    if(!name || !type === "") return;

    animals.push({name , type})
    console.log(animals)
    animalName.value = "";
    animalType.value;

    render()
};

const searchAnimal = () =>{
    const searchAnimal = document.getElementById("searchAnimal");
    const filterType = document.getElementById("filterType");

    const searchValue = searchAnimal.value.trim().toLowerCase();
    const filterValue = filterType.value;

    const found = animals.some((animal) =>{
        const nameMatch = animal.name.toLowerCase().includes(searchValue);

        const typeMatch = filterValue === "Kaikki" || animal.type === filterValue;
        return nameMatch && typeMatch

    });
    const resultBox = document.getElementById("searchResult");
    resultBox.textContent = found ? "Found" : "Not Found"
    
   
}