window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

function setupIntialValues() {
  // Get the inputs from the DOM.
  const loanAmtElem = document.getElementById("loan-amount");
  const loanYrsElem = document.getElementById("loan-years");
  const loanRateElem = document.getElementById("loan-rate");

  // Put some default values in the inputs
  loanAmtElem.value = '350000';
  loanYrsElem.value = '30';
  loanRateElem.value = '6.7';

  // Call a function to calculate the current monthly payment
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const periodicInterestRate = values.rate / (12 * 100);
  const totalNumOfPayments = values.years * 12;
  const monthlyPayment = (values.amount * periodicInterestRate) / (1 - Math.pow(1+ periodicInterestRate, -1 * totalNumOfPayments));
  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = monthly;
}
