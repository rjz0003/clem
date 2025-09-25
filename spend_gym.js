const foodDisplay = document.getElementById("gymPoints");
const spendButtons = document.querySelectorAll(".spendBtn");

let totals = JSON.parse(localStorage.getItem("totals")) || { gym:0, art:0, total:0 };

function updateDisplay() {
  foodDisplay.textContent = totals.food;
}
updateDisplay();

spendButtons.forEach(button => {
  button.addEventListener("click", () => {
    const cost = parseInt(button.dataset.cost);

    if (totals.gym >= cost) {
      totals.gym -= cost;
      totals.total -= cost; // also reduce from total
      localStorage.setItem("totals", JSON.stringify(totals));
      updateDisplay();
      alert(`You bought ${button.textContent}!`);
    } else {
      alert("Not enough gym points!");
    }
  });
});
