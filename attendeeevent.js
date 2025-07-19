function toggleDetails(button) {
  const card = button.closest('.event-card');
  const details = card.querySelector('.details');
  if (details.style.display === 'none') {
    details.style.display = 'block';
    button.innerText = 'Hide Details';
  } else {
    details.style.display = 'none';
    button.innerText = 'View Details';
  }
}

function toggleMap(button, locationName) {
  const card = button.closest('.event-card');
  const mapDiv = card.querySelector('.map');
  const iframe = mapDiv.querySelector('iframe');

  if (mapDiv.style.display === 'none') {
    const encodedLocation = encodeURIComponent(locationName + ', Bangladesh');
    iframe.src = `https://www.google.com/maps?q=${encodedLocation}&output=embed`;
    mapDiv.style.display = 'block';
    button.innerText = 'Hide Map';
  } else {
    mapDiv.style.display = 'none';
    iframe.src = ''; // Reset map
    button.innerText = 'View Map';
  }
}
