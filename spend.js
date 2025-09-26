const totalPointsDisplay = document.getElementById("totalPoints");
const spendButtons = document.querySelectorAll(".spendBtn");

// Load totals from localStorage (same object earn.js uses)
let totals = JSON.parse(localStorage.getItem("totals")) || {
  gym: 0,
  art: 0,
  total: 0
};

// Show current total points
totalPointsDisplay.textContent = totals.total;

spendButtons.forEach(button => {
  button.addEventListener("click", () => {
    const cost = parseInt(button.dataset.cost);

    if (totals.total >= cost) {
      totals.total -= cost;

      // Save updated totals
      localStorage.setItem("totals", JSON.stringify(totals));

      // Update display
      totalPointsDisplay.textContent = totals.total;

      alert(`You bought ${button.textContent}!`);
    } else {
      alert("Not enough points!");
    }
  });
});
