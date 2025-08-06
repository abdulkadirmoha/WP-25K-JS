
document.addEventListener("DOMContentLoaded", () => {
  const ordersContainer = document.getElementById("ordersContainer");
  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (orders.length === 0) {
    ordersContainer.innerHTML = "<p>Ei tilauksia vielä.</p>";
    return;
  }

  function renderOrders() {
    ordersContainer.innerHTML = ""; 

    orders.forEach((order, index) => {
      const orderDiv = document.createElement("div");
      orderDiv.classList.add("order-card");
      orderDiv.style.cursor = "pointer";

      // Color-code based on status
      if (order.status === "completed") {
        orderDiv.style.backgroundColor = "#d4edda"; 
      } else {
        orderDiv.style.backgroundColor = "#f8d7da"; 
      }

      orderDiv.innerHTML = `
        <h3>Tilauksen #${index + 1}</h3>
        <p><strong>Asiakas:</strong> ${order.customerName}</p>
        <p><strong>Pannukakku:</strong> ${order.selectedPancake}</p>
        <p><strong>Täytteet:</strong> ${order.toppingList}</p>
        <p><strong>Lisukkeet:</strong> ${order.extraList}</p>
        <p><strong>Toimitus:</strong> ${order.deliveryInfo}</p>
        <p><strong>Hinta:</strong> ${(order.total ?? 0).toFixed(2)}€</p>
        <p><strong>Tila:</strong> ${order.status}</p>
        <hr/>
      `;

   
      orderDiv.addEventListener("dblclick", () => {
        if (order.status !== "completed") {
          orders[index].status = "completed";
          localStorage.setItem("orders", JSON.stringify(orders));
          renderOrders(); 
        }
      });

      ordersContainer.appendChild(orderDiv);
    });
  }

  renderOrders();
});
