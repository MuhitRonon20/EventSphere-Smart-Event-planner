document.addEventListener("DOMContentLoaded", function () {
  const sendBtn = document.querySelector(".send-btn");
  const chatBox = document.querySelector(".chat-box");
  const inputField = document.querySelector(".chat input");

  sendBtn.addEventListener("click", () => {
    const msg = inputField.value.trim();
    if (msg) {
      const msgEl = document.createElement("div");
      msgEl.className = "message attendee";
      msgEl.textContent = msg;
      chatBox.appendChild(msgEl);
      inputField.value = "";
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  });

  document.querySelectorAll(".update-rsvp").forEach(button => {
    button.addEventListener("click", () => {
      const newStatus = prompt("Change RSVP to: Confirmed / Canceled / Pending");
      if (newStatus) {
        button.previousElementSibling.querySelector(".rsvp-status").textContent = newStatus;
      }
    });
  });

  document.querySelectorAll(".view-ticket").forEach(button => {
    button.addEventListener("click", () => {
      alert("Here is your digital ticket (QR simulated) 🎫");
    });
  });
});
