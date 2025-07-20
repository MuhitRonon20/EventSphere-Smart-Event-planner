document.getElementById('profileForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("✅ Profile updated successfully!");
  setTimeout(() => {
    window.location.href = "attendee.html";
  }, 1000);
});

document.getElementById('profilePicInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    document.getElementById('previewImg').src = URL.createObjectURL(file);
  }
});

function goToDashboard() {
  window.location.href = "attendee.html";
}

function logout() {
  alert("Logging out...");
  window.location.href = "index.html"; // or homepage
}

