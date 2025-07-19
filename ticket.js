function generateQR(qrId, seatId, eventId) {
  const seat = document.getElementById(seatId).value;
  const qrImg = document.getElementById(qrId);

  if (!seat) {
    alert("Please select a seat before confirming.");
    return;
  }

  const data = `${eventId}-${seat}`;
  const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(data)}`;
  
  qrImg.src = qrURL;
  qrImg.style.display = 'block';
}
