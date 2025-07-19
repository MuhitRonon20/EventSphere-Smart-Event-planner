document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const userType = document.getElementById('userType').value;

    if (userType === 'organizer') {
      window.location.href = 'organizerdb.html';
    } else if (userType === 'vendor') {
      window.location.href = 'vendordb.html';
    } else if (userType === 'attendee') {
      window.location.href = 'attendeedb.html';
    } else if (userType === 'client') {
      window.location.href = 'clientdb.html'; // redirect for client
    } else {
      alert("Please select a user type.");
    }
  });
});
