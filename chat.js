function openChat(eventName, organizer) {
  document.getElementById('chatSection').style.display = 'block';
  document.getElementById('eventName').textContent = eventName;
  document.getElementById('organizerName').textContent = organizer;

  // Reset chat
  const chatBox = document.getElementById('chatBox');
  chatBox.innerHTML = `<div class="message organizer">Hello! How can I help you with this event?</div>`;
  document.getElementById('userMessage').value = '';
}

function sendMessage() {
  const input = document.getElementById('userMessage');
  const message = input.value.trim();
  const chatBox = document.getElementById('chatBox');

  if (message !== '') {
    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    userMsg.textContent = message;
    chatBox.appendChild(userMsg);

    // Auto-scroll
    chatBox.scrollTop = chatBox.scrollHeight;

    // Fake reply
    setTimeout(() => {
      const reply = document.createElement('div');
      reply.className = 'message organizer';
      reply.textContent = "Thank you for reaching out! 😊";
      chatBox.appendChild(reply);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
  }

  input.value = '';
}
