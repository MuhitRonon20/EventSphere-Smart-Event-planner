let selectedRating = 0;
let currentEvent = '';

function selectEvent(eventName) {
  currentEvent = eventName;
  document.getElementById('selectedEventName').textContent = eventName;
  document.getElementById('feedbackSection').style.display = 'block';

  // Reset stars and comment
  selectedRating = 0;
  document.getElementById('comment').value = '';
  document.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));
  document.getElementById('result').textContent = '';
}

document.querySelectorAll('.star').forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = parseInt(star.getAttribute('data-value'));
    document.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));
    for (let i = 1; i <= selectedRating; i++) {
      document.querySelector(`.star[data-value="${i}"]`).classList.add('selected');
    }
  });
});

function submitFeedback() {
  const comment = document.getElementById('comment').value.trim();
  const result = document.getElementById('result');

  if (selectedRating === 0 || comment === '') {
    result.style.color = 'red';
    result.textContent = 'Please provide both a rating and comment.';
  } else {
    result.style.color = 'lightgreen';
    result.innerHTML = `✅ Feedback Submitted for <strong>${currentEvent}</strong><br>⭐ Rating: ${selectedRating}<br>💬 "${comment}"`;
    document.getElementById('comment').value = '';
    selectedRating = 0;
    document.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));
  }
}
