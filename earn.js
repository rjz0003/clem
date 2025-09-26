const items = document.querySelectorAll(".item");
const sessionTotalDisplay = document.getElementById("sessionTotal");
const submitBtn = document.getElementById("submitBtn");

// Track session totals
let sessionTotals = {
  gym: 0,
  art: 0,
  total: 0
};

// Load from localStorage
let totals = JSON.parse(localStorage.getItem("totals")) || {
  gym: 0,
  art: 0,
  total: 0
};

// Update the totals shown on the page
function updateDisplay() {
  document.getElementById("totalPoints").textContent = totals.total;
  document.getElementById("gymTotal").textContent = totals.gym;
  document.getElementById("artTotal").textContent = totals.art;
}
updateDisplay();

// Update the session total before submit
function updateSessionTotal() {
  sessionTotals = { gym: 0, art: 0, total: 0 };

  items.forEach(item => {
    if (item.checked) {
      let val = parseInt(item.value);
      let cat = item.dataset.category; // gym, art, or undefined

      // Add to category if defined
      if (cat && sessionTotals.hasOwnProperty(cat)) {
        sessionTotals[cat] += val;
      }

      // Always add to total
      sessionTotals.total += val;
    }
  });

  sessionTotalDisplay.textContent = sessionTotals.total;
}

items.forEach(item => item.addEventListener("change", updateSessionTotal));

submitBtn.addEventListener("click", () => {
  for (let cat in sessionTotals) {
    totals[cat] += sessionTotals[cat];
  }

  // Save to localStorage
  localStorage.setItem("totals", JSON.stringify(totals));

  // Reset session
  sessionTotals = { gym: 0, art: 0, total: 0 };
  sessionTotalDisplay.textContent = 0;
  items.forEach(item => (item.checked = false));

  updateDisplay();
});
