const foodDisplay = document.getElementById("artPoints");
const spendButtons = document.querySelectorAll(".spendBtn");

let totals = JSON.parse(localStorage.getItem("totals")) || { gym:0, art:0, total:0 };

function updateDisplay() {
  foodDisplay.textContent = totals.art;
}
updateDisplay();

spendButtons.forEach(button => {
  button.addEventListener("click", () => {
    const cost = parseInt(button.dataset.cost);

    if (totals.art >= cost) {
      totals.art -= cost;
      totals.total -= cost; // also reduce from total
      localStorage.setItem("totals", JSON.stringify(totals));
      updateDisplay();
      alert(`You bought ${button.textContent}!`);
    } else {
      alert("Not enough art points!");
    }
  });
});
