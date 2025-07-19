document.getElementById('profileForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (!name || !email || !phone) {
    document.getElementById('saveMessage').textContent = "Please fill in all fields.";
    return;
  }

  document.getElementById('saveMessage').textContent = "Profile updated successfully!";
});
