const itemsData = {
  venue: [
    { name: "Grand Hall", price: 1500, img: "img/venue1.jpg" },
    { name: "Beachside Venue", price: 2000, img: "img/venue2.jpg" }
  ],
  catering: [
    { name: "Premium Buffet", price: 900, img: "img/catering1.jpg" },
    { name: "Standard Meals", price: 600, img: "img/catering2.jpg" }
  ],
  photography: [
    { name: "Photo + Video", price: 1000, img: "img/photo1.jpg" },
    { name: "Photo Only", price: 700, img: "img/photo2.jpg" }
  ],
  lighting: [
    { name: "LED Setup", price: 400, img: "img/light1.jpg" },
    { name: "Stage Lighting", price: 600, img: "img/light2.jpg" }
  ],
  decoration: [
    { name: "Luxury Decor", price: 800, img: "img/decor1.jpg" },
    { name: "Basic Setup", price: 400, img: "img/decor2.jpg" }
  ]
};

document.getElementById("eventForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const type = document.getElementById("eventType").value;
  const people = parseInt(document.getElementById("totalPeople").value);
  const budget = parseInt(document.getElementById("budget").value);

  generatePlan(type, people, budget);
});

function generatePlan(type, people, budget) {
  const priorities = ["venue", "catering", "decoration", "lighting", "photography"];
  let plan = [];
  let remaining = budget;

  for (let category of priorities) {
    const options = itemsData[category];
    let item = options.find(opt => opt.price <= remaining / (priorities.length - plan.length));
    if (item) {
      plan.push({ ...item, category });
      remaining -= item.price;
    }
  }

  displayPlan(plan);
}

function displayPlan(plan) {
  const planPreview = document.getElementById("planPreview");
  const planItems = document.getElementById("planItems");
  planItems.innerHTML = "";

  plan.forEach(item => {
    const div = document.createElement("div");
    div.className = "plan-card";
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      <h4>${item.name}</h4>
      <p>${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
      <strong>$${item.price}</strong>
    `;
    planItems.appendChild(div);
  });

  planPreview.style.display = "block";
}

function acceptPlan() {
  showToast("Plan Accepted! Redirecting to dashboard...");
  setTimeout(() => window.location.href = "organizerdb.html", 2000);
}

function customizePlan() {
  showToast("Redirecting to customize screen...");
  setTimeout(() => window.location.href = "myevent.html", 2000);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}
