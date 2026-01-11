const amount = document.getElementById("amount");
const rate = document.getElementById("rate");
const tenure = document.getElementById("tenure");

const amountRange = document.getElementById("amountRange");
const rateRange = document.getElementById("rateRange");
const tenureRange = document.getElementById("tenureRange");

// Sync range & input
amount.value = amountRange.value;
rate.value = rateRange.value;
tenure.value = tenureRange.value;

amountRange.oninput = () => amount.value = amountRange.value;
rateRange.oninput = () => rate.value = rateRange.value;
tenureRange.oninput = () => tenure.value = tenureRange.value;

amount.oninput = () => amountRange.value = amount.value;
rate.oninput = () => rateRange.value = rate.value;
tenure.oninput = () => tenureRange.value = tenure.value;

function calculateEMI() {
  let P = +amount.value;
  let R = +rate.value / 12 / 100;
  let N = +tenure.value;

  if (!P || !R || !N) {
    alert("Please fill all fields");
    return;
  }

  let emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  let total = emi * N;
  let interest = total - P;

  document.getElementById("emi").innerText =
    "Monthly EMI: ₹ " + emi.toFixed(2);

  document.getElementById("interest").innerText =
    "Total Interest: ₹ " + interest.toFixed(2);

  document.getElementById("total").innerText =
    "Total Payment: ₹ " + total.toFixed(2);
}

// Dark mode
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};
