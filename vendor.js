const data = {
  Photography: {
    Wedding: [
      { name: "SnapShot Studio", company: "SnapShot", location: "Dhaka", phone: "01712345678", rating: 4 },
      { name: "Elite Frames", company: "Elite", location: "Chattogram", phone: "01812345678", rating: 5 }
    ],
    Event: [
      { name: "Zoomify", company: "Zoomify Media", location: "Sylhet", phone: "01698765432", rating: 3 }
    ]
  },
  Catering: {
    Buffet: [
      { name: "Royal Caterers", company: "Royal", location: "Dhaka", phone: "01711223344", rating: 5 }
    ],
    Plated: [
      { name: "Delish Serve", company: "Delish", location: "Khulna", phone: "01999887766", rating: 4 }
    ]
  }
};

const categoryList = document.getElementById("categoryList");
const typeSection = document.getElementById("typeSection");
const vendorSection = document.getElementById("vendorSection");
const chatbox = document.getElementById("chatbox");
const chatVendorName = document.getElementById("chatVendorName");
const messages = document.getElementById("messages");
const chatInput = document.getElementById("chatInput");

Object.keys(data).forEach(category => {
  const li = document.createElement("li");
  li.textContent = category;
  li.onclick = () => showTypes(category);
  categoryList.appendChild(li);
});

function showTypes(category) {
  typeSection.innerHTML = "";
  vendorSection.innerHTML = "";
  Object.keys(data[category]).forEach(type => {
    const div = document.createElement("div");
    div.className = "type-button";
    div.textContent = type;
    div.onclick = () => showVendors(category, type);
    typeSection.appendChild(div);
  });
}

function showVendors(category, type) {
  vendorSection.innerHTML = "";
  data[category][type].forEach(vendor => {
    const card = document.createElement("div");
    card.className = "vendor-card";
    card.innerHTML = `
      <h4>${vendor.name} (${vendor.company})</h4>
      <p><strong>Location:</strong> ${vendor.location}</p>
      <p><strong>Phone:</strong> ${vendor.phone}</p>
      <p class="star-rating">${"⭐".repeat(vendor.rating)}</p>
      <button onclick="bookVendor('${vendor.name}')">Book</button>
      <button onclick="openChat('${vendor.name}')">Message</button>
    `;
    vendorSection.appendChild(card);
  });
}

function bookVendor(name) {
  alert(`You booked ${name}`);
}

function openChat(name) {
  chatbox.style.display = "flex";
  chatVendorName.textContent = `Chat with ${name}`;
  messages.innerHTML = `<div class="message">Hi, I'm ${name}. How can I help you?</div>`;
}

function sendMessage() {
  const text = chatInput.value.trim();
  if (text) {
    const msg = document.createElement("div");
    msg.className = "message";
    msg.textContent = text;
    messages.appendChild(msg);
    chatInput.value = "";
    messages.scrollTop = messages.scrollHeight;
  }
}
