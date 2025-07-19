const eventCards = document.querySelectorAll(".event-card");

eventCards.forEach(card => {
  const goingBtn = card.querySelector(".going-btn");
  const notBtn = card.querySelector(".not-btn");

  goingBtn.addEventListener("click", () => {
    alert("✅ Marked as 'Going'");
    card.remove(); // Remove the event card
  });

  notBtn.addEventListener("click", () => {
    alert("❌ Marked as 'Not Interested'");
    card.remove(); // Remove the event card
  });
});
