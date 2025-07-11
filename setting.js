function goBack() {
  window.location.href = 'organizer-dashboard.html'; // Change this to your dashboard path
}

function previewImage(event) {
  const reader = new FileReader();
  reader.onload = function () {
    document.getElementById('profileImage').src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

document.getElementById('profileForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Profile updated successfully!");
  window.location.href = 'organizerdb.html'; // Change this as needed
});
