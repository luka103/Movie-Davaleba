document.addEventListener("DOMContentLoaded", () => {
    const orderSummary = document.getElementById("orderSummary");
    const totalPrice = document.getElementById("totalPrice");
    const confirmButton = document.getElementById("confirmButton");
    const clearButton = document.getElementById("clearButton");
    const homeButton = document.getElementById("homeButton");
  
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats")) || [];
    const total = selectedSeats.reduce((acc, seat) => acc + seat.price, 0);
  
    orderSummary.innerHTML = `<p>You have selected ${selectedSeats.length} seat(s): ${selectedSeats.map(seat => seat.id).join(", ")}</p>`;
  
    totalPrice.innerHTML = `<p>Total Price: $${total}</p>`;
  
    confirmButton.addEventListener("click", () => {
      alert("Order confirmed!");
    });
  
    clearButton.addEventListener("click", () => {
      localStorage.removeItem("selectedSeats");
      window.location.href = "checkout.html";
    });
  
    homeButton.addEventListener("click", () => {
      window.location.href = "index.html";
    });
    returnButton.addEventListener("click", () => {
        window.location.href = "movie.html";
      });
  });
  