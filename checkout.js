// Load cart from localStorage
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

// Handle form submission
document.getElementById('checkoutForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const address = document.getElementById('address').value.trim();
  const paymentMethod = document.querySelector('input[name="payment"]:checked');

  if (!paymentMethod) {
    alert("Please select a payment method.");
    return;
  }

  // Simulate order processing
  alert(`Thank you ${name}! Your order is confirmed via ${paymentMethod.value}.`);
  localStorage.removeItem('cart');
  window.location.href = 'organizerdb.html'; // Redirect to dashboard
});
