const totalPointsDisplay = document.getElementById("totalPoints");
const spendButtons = document.querySelectorAll(".spendBtn");

let points = parseInt(localStorage.getItem("points")) || 0;
totalPointsDisplay.textContent = points;

spendButtons.forEach(button => {
  button.addEventListener("click", () => {
    const cost = parseInt(button.dataset.cost);

    if (points >= cost) {
      points -= cost;
      localStorage.setItem("points", points);
      totalPointsDisplay.textContent = points;
      alert(`You bought ${button.textContent}!`);
    } else {
      alert("Not enough points!");
    }
  });
});
