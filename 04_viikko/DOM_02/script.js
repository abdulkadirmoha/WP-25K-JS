/*
Käytä HTML-tiedostoa, jossa on <input>-kenttä, <button> ja <ul>-lista, jonka ID on fruitList.
Kirjoita JavaScript-koodi, joka:
- Hakee arvon input-kentästä, kun painiketta klikataan.
- Luo uuden <li>-elementin ja asettaa sen tekstisisällöksi input-kentän arvon.
- Lisää <li>-elementin listaan.
- Tyhjentää input-kentän hedelmän lisäämisen jälkeen.
*/






  function addNewItemstoList() {
    const userInput = document.querySelector("#fruitInput").value;
    if(userInput !== ""){
      const newList = document.createElement("li");
      newList.textContent = userInput;

      //appending
      const newItemAdded = document
        .querySelector("#fruitList")
        .appendChild(newList);
        document.querySelector("#fruitInput").value = "";
    }else{
      alert("Enter somthing")
    }
    //create new <li> 
    

 

  }

  document
    .getElementById("fruitInput")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        addNewItemstoList();
      }
    });

    document.getElementById("addFruitBtn").addEventListener("click", function(){

      const userInput = document.getElementById("fruitInput").value;
      if(userInput !== "") {
        const newListItem = document.createElement("li");
        newListItem.textContent = userInput
        document.getElementById("fruitList").appendChild(newListItem);
        document.getElementById("fruitInput").value = "";
      } else{
        alert("Enter value")
      }

    });