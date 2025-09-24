const items = document.querySelectorAll(".item");
const sessionTotalDisplay = document.getElementById("sessionTotal");
const overallTotalDisplay = document.getElementById("overallTotal");
const submitBtn = document.getElementById("submitBtn");

let sessionTotal = 0;

// Load saved total from localStorage
let overallTotal = parseInt(localStorage.getItem("points")) || 0;
overallTotalDisplay.textContent = overallTotal;

// Update session total when checkboxes change
function updateSessionTotal() {
  sessionTotal = 0;
  items.forEach(item => {
    if (item.checked) {
      sessionTotal += parseInt(item.value);
    }
  });
  sessionTotalDisplay.textContent = sessionTotal;
}

items.forEach(item => {
  item.addEventListener("change", updateSessionTotal);
});

// When submit is pressed
submitBtn.addEventListener("click", () => {
  overallTotal += sessionTotal;
  localStorage.setItem("points", overallTotal);

  overallTotalDisplay.textContent = overallTotal;
  sessionTotal = 0;
  sessionTotalDisplay.textContent = 0;

  // Reset checkboxes
  items.forEach(item => (item.checked = false));
});
