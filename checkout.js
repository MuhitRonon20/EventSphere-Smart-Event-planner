// Load cart items and display
document.addEventListener('DOMContentLoaded', () => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartList = document.getElementById('cartItems');
  const totalEl = document.getElementById('checkoutTotal');
  let total = 0;

  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${item.name}</span><span>$${item.price}</span>`;
    cartList.appendChild(li);
    total += parseFloat(item.price);
  });

  totalEl.textContent = total.toFixed(2);
});

// Handle checkout form submission
document.getElementById('checkoutForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const address = document.getElementById('address').value.trim();
  const comment = document.getElementById('comment').value.trim();
  const paymentMethod = document.querySelector('input[name="payment"]:checked');
  const total = document.getElementById('checkoutTotal').textContent;
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  if (!paymentMethod) {
    alert("Please select a payment method.");
    return;
  }

  // Show popup
  document.getElementById('checkoutContainer').style.display = 'none';
  const popup = document.getElementById('confirmationPopup');
  popup.style.display = 'block';

  // Create transcript
  let transcriptHTML = `<p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Payment Method:</strong> ${paymentMethod.value}</p>
    <p><strong>Total Paid:</strong> $${total}</p>
    <h3>Items:</h3>
    <ul>`;

  cartItems.forEach(item => {
    transcriptHTML += `<li>${item.name} - $${item.price}</li>`;
  });
  transcriptHTML += `</ul>`;

  document.getElementById('transcript').innerHTML = transcriptHTML;
  localStorage.removeItem('cart');
});

// Download transcript as .txt
function downloadTranscript() {
  const text = document.getElementById('transcript').innerText;
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Event_Transcript.txt';
  a.click();
  URL.revokeObjectURL(url);
}

// Simulate share event
function shareEvent() {
  alert("Event shared successfully!");
}
