document.addEventListener('DOMContentLoaded', function () {
  const cardNumberInput = document.getElementById('card-number');
  const expiryDateInput = document.getElementById('expiry-date');
  const checkoutForm = document.getElementById('checkout-form');

  // Format card number: #### #### #### ####
  cardNumberInput.addEventListener('input', function () {
    let value = this.value.replace(/\D/g, ''); // Remove non-numeric characters
    value = value.replace(/(\d{4})/g, '$1 ').trim(); // Add space every 4 digits
    this.value = value;
  });

  // Format expiry date: MM/YY
  expiryDateInput.addEventListener('input', function () {
    let value = this.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (value.length >= 2) {
      value = value.replace(/(\d{2})/, '$1/'); // Add slash after MM
    }
    this.value = value;
  });

  // Form submission
  checkoutForm.addEventListener('submit', function (e) {
    e.preventDefault();

    alert('Payment successful!');
  });
});
