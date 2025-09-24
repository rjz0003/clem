// Grab all checkboxes
const items = document.querySelectorAll(".item");
const totalDisplay = document.getElementById("total");

function updateTotal() {
  let total = 0;
  items.forEach(item => {
    if (item.checked) {
      total += parseInt(item.value);
    }
  });
  totalDisplay.textContent = total;
}

// Add event listeners
items.forEach(item => {
  item.addEventListener("change", updateTotal);
});
