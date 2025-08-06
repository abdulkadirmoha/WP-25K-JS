document.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("pancakeForm");
  let totalPriceElement = document.querySelector(".data-price");
  const showOrderButton = document.querySelector(".showOrderButton");
  const orderSummaryDiv = document.querySelector(".orderSummary");
  const customerNameInput = document.getElementById("customerName");

  let toppings = [];
  let extra = [];

  // Load existing orders or initialize empty array
  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  const updatePrice = () => {
    const pancakeTypeSelect = document.getElementById("type");
    const selectedType =
      pancakeTypeSelect.options[pancakeTypeSelect.selectedIndex];
    let total = parseFloat(selectedType.getAttribute("data-price"));

    total = total + toppings.length * 1;

    let extraCheckboxes = document.querySelectorAll(".extra");
    extraCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        total = total + parseFloat(checkbox.getAttribute("data-price"));
      }
    });

    const selectedDelivery = document.querySelector(
      'input[name="delivery"]:checked'
    );
    if (selectedDelivery) {
      const deliveryFee =
        parseFloat(selectedDelivery.getAttribute("data-price")) || 0;
      total += deliveryFee;
    }

    totalPriceElement.textContent = "Yhteensä: " + total.toFixed(2) + "€";
  };

  const handleToppings = (checkbox) => {
    const toppingName = checkbox.parentElement.textContent.trim();
    if (checkbox.checked) {
      toppings.push(toppingName);
    } else {
      toppings = toppings.filter((t) => t !== toppingName);
    }
    updatePrice();
  };

  const handleExtra = (checkbox) => {
    const extraName = checkbox.parentElement.textContent.trim();
    if (checkbox.checked) {
      extra.push(extraName);
    } else {
      extra = extra.filter((t) => t !== extraName);
    }
    updatePrice();
  };

  function saveOrder(orderObj) {
    orders.push(orderObj);
    localStorage.setItem("orders", JSON.stringify(orders));
  }

  function displayOrder() {
    const customerName = customerNameInput.value.trim();
    const pancakeTypeSelect = document.getElementById("type");
    const selectedPancake =
      pancakeTypeSelect.options[pancakeTypeSelect.selectedIndex].textContent;

    const selectedDelivery = document.querySelector(
      'input[name="delivery"]:checked'
    );
    let deliveryInfo = selectedDelivery
      ? selectedDelivery.parentElement.textContent.trim()
      : "Ei valittu";

    let extraList = extra.length > 0 ? extra.join(", ") : "Ei lisäyksiä";
    let toppingList =
      toppings.length > 0 ? toppings.join(", ") : "Ei täytteitä";

    // Parse total price number only
    const priceText = totalPriceElement.textContent
      .replace("Yhteensä: ", "")
      .replace("€", "");
    const total = parseFloat(priceText);

    if (customerName === "") {
      alert("Enter your name");
      return;
    }

    const orderObj = {
      customerName,
      selectedPancake,
      toppingList,
      extraList,
      deliveryInfo,
      total,
      status: "pending",
      id: Date.now(),
    };

    saveOrder(orderObj);

    orderSummaryDiv.innerHTML = `
      <h4>Your Order:</h4>
      <p><strong>Customer Name:</strong> ${customerName}</p>
      <p><strong>Pancake Type:</strong> ${selectedPancake}</p>
      <p><strong>Toppings:</strong> ${toppingList}</p>
      <p><strong>Extras:</strong> ${extraList}</p>
      <p><strong>Delivery:</strong> ${deliveryInfo}</p>
      <p><strong>Total:</strong> ${total.toFixed(2)}€</p>
    `;

    resetForm();
  }

  function resetForm() {
    form.reset();
    toppings = [];
    extra = [];
    updatePrice(); // reset price display after clearing form
  }

  // Event listeners
  form.addEventListener("change", (event) => {
    const target = event.target;
    if (target.id === "type") {
      updatePrice();
    } else if (target.classList.contains("topping")) {
      handleToppings(target);
    } else if (target.classList.contains("extra")) {
      handleExtra(target);
    } else if (target.classList.contains("delivery")) {
      updatePrice();
    }
  });

  showOrderButton.addEventListener("click", (event) => {
    event.preventDefault();
    displayOrder();
  });

  updatePrice(); 
});
