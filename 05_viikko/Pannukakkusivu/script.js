document.addEventListener("DOMContentLoaded", (event) => {
    const form = document.getElementById("pancakeForm");
    let totalPrice = document.querySelector('.data-price');

    let toppings = [];
    let extra = [];

    form.addEventListener("change", (event) => {
        const target = event.target;
        if(target.id === "type") {
            updatePrice()
        } else if(target.classList.contains("topping" ) ){
            handleToppings(target);
            
        } else if (target.classList.contains("extra")){
          handleExtra(target);
        }  
        
    });
    const updatePrice =() => {
        const pancakeType = document.getElementById("type");
        const selectedType = pancakeType.options[pancakeType.selectedIndex];
        let total = parseFloat(selectedType.getAttribute("data-price"));

        total = total +toppings.length * 1;

        let extraChoices = document.querySelectorAll(".extra");
        extraChoices.forEach((checkbox) => {
            if(checkbox.checked){
                total = total + parseFloat(checkbox.getAttribute("data-price"))
            }
        });


        let formattedTotal = "Yhteensä: " + total.toFixed(2)  + "€";
        totalPrice.textContent = formattedTotal
    }
    const handleToppings =(checkbox) => {
    const checkboxes = document.querySelectorAll('input[name="topping"]');
    const toppingName = checkbox.parentElement.textContent.trim();
        if(checkbox.checked){
            toppings.push(toppingName)

        } else {
            toppings = toppings.filter((t) =>  t !== toppingName)
        } 
        console.log("täytteet: ", toppings)
        updatePrice();
    }
    const handleExtra = (checkbox) => {
        const checkboxes = document.querySelectorAll('input[name= "extra"]');
        const extraName = checkbox.parentElement.textContent.trim();
        if(checkbox.checked){
          extra.push(extraName);
        } else {
            extra = extra.filter((t) => t ==! extraName )
        }
        console.log("Extrea", extra)
        updatePrice();
    }
});
