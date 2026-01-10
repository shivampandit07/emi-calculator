function calculateEMI() {
  let P = Number(document.getElementById("amount").value);
  let R = Number(document.getElementById("rate").value);
  let N = Number(document.getElementById("tenure").value);

  if (P === 0 || R === 0 || N === 0) {
    alert("Please fill all fields");
    return;
  }

  let monthlyRate = R / 12 / 100;

  let emi = (P * monthlyRate * Math.pow(1 + monthlyRate, N)) /
            (Math.pow(1 + monthlyRate, N) - 1);

  let totalPayment = emi * N;
  let totalInterest = totalPayment - P;

  document.getElementById("emi").innerText =
    "Monthly EMI: ₹ " + emi.toFixed(2);

  document.getElementById("interest").innerText =
    "Total Interest: ₹ " + totalInterest.toFixed(2);

  document.getElementById("total").innerText =
    "Total Payment: ₹ " + totalPayment.toFixed(2);
}
