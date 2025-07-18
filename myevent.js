const itemsData = {
  venue: {
    img: "image/image1.jpg",
    subcategories: {
      BanquetHalls: {
        img: "image/banquet.jpg",
        items: [
          { name: "The Crystal Grand Hall Estiment:400-500 Location: 32 Rankin street ,Wari", price: 150000, img: "image/hall1.jpg" },
          { name: "Royal Orchid Hall Estiment:500 Location: 325 Abdul hotel road , Malibagh ", price: 160000, img: "image/hall2.jpg" },
          { name: "BGB Banquet Hall Estiment :500-600 Location: Shimanto Shambhar (4th Floor), Road 2, Dhanmondi, Dhaka‑1205", price: 180000, img: "image/hall3.jpg" },
          { name: "Bangabandhu International Conference Center  Estiment:400-500 Location: Sher‑e‑Bangla Nagar, Agargaon, Dhaka ", price: 100000, img: "image/hall4.jpg" },
          { name: " Grand Palace Hotel – Banquet & Conference Hall Estiment:400-500 Location: 22 Kakrail Road, Dhaka‑1000 ", price: 165000, img: "image/hall5.jpg" },
          { name: "InterContinental Dhaka Estiment:500 Location: 1 Minto Road, Ramna, Dhaka ", price: 200000, img: "image/hall6.jpg" },
          { name: "The Westin Dhaka Estiment:500 Location: Plot 01, Road 45, Gulshan‑2, Dhaka‑1212 ", price: 100000, img: "image/hall7.jpg" },
          { name: "Dhaka Regency Hotel & Resort Estiment:550 Location: Nikunja 2 area, Dhaka", price: 120000, img: "image/hall8.avif" },
          { name: "Spectra Convention Centre Estiment:550 Location: House 19, Road 7, Gulshan‑1, Dhaka", price: 190000, img: "image/hall9.webp" },
          { name: "The Grand Hall Restaurant Estiment:550 Location: 32 no street Dhanmondi, Dhaka  ", price: 180000, img: "image/hall10.jpg" },
          { name: "Evergreen Celebration Hall Estiment:650 Location:  House 17, Road 4, Sector 12, Uttara, Dhaka 1230", price: 160000, img: "image/hall11.jpg" },
          { name: " Golden Lotus Banquet Palace Estiment:550 Location: Plot 22, Lakeview Road, Baridhara DOHS, Dhaka 1212  ", price: 150000, img: "image/hall12.jpg" },
        ]
      },
      Rooftop: {
        img: "image/rooftop.png",
        items: [
          { name: "Tree House Estiment:120-140 Location: House 13/E, Road 13E, Banani Model Town, Dhaka 1213",  price: 40000, img: "image/roof1.jpg" },
          { name: "ChileKotha Estiment: 170 Location: Block F, Banani, Road near 21 or 13, Dhaka 1213 ", price: 45000, img: "image/roof2.jpg" },
          { name: "Tribe Rooftop Lounge  Estmient: 100-120 Location : 52, Road No. 11, Block F, Banani, Dhaka 1213", price: 60000, img: "image/roof3.webp" },
          { name: "Alfresco Rooftop Estiment: 110-120 Location: Banani‑11, near Platinum Grand area, Dhaka 1213 ", price: 45000, img: "image/roof4.webp" },
          { name: "CHA BAGAN Estiment: 100 Location: Plot 55, Road 21, Banani Model Town, Dhaka 1213", price: 50000, img: "image/roof5.webp" },
          { name: "The Green Lounge Estiment: 120 Location: 18th Floor, Rupayan Trade Center, 114 Kazi Nazrul Islam Ave, Dhaka 1000", price: 30000, img: "image/roof6.webp" },
          { name: "Grill On The Skyline Estiment: 130 Location: Airport Road, Nikunja 2, Dhaka 1229", price: 40000, img: "image/roof7.png" },
          { name: "Picasso Restaurant Estiment:100 Location:Level 12‑13 & Rooftop, Link Road, Gulshan, Dhaka 1208", price: 55000, img: "image/roof8.jpg" },
          { name: "RCoco Cabana  Estiment: 110 Location: House 81, Road 13/A, Block D, Banani, Dhaka 1213", price: 44000, img: "image/roof9.jpg" },
          { name: "The Forest Lounge Estiment: 100 Location: Dhanmondi‑27, Satmosjid Road area, Dhaka ", price: 75000, img: "image/roof10.jpg" },
          { name: "Rooftop Soi3 Estiment: 100 Location: Dhanmondi‑27, Dhaka", price: 75000, img: "image/roof11.webp" },
          { name: "The Hub Rooftop Estiment:90 Location: Mirpur‑1, Dhaka", price: 65000, img: "image/roof12.jpg" },          

        ]
      },

      
      Conference: {
        img: "image/conference.jpg",
        items: [
          { name: "Bangabandhu International Conference Center Estiment:200-220 Location: Sher‑e‑Bangla Nagar, Agargaon, Dhaka 1207", price: 90000, img: "image/con1.avif" },
          { name: "AMM Convention Center Estiment:200-250 Location:House #56A, 3/A Satmasjid Road, Dhanmondi, Dhaka 1209", price: 110000, img: "image/con2.avif" },
          { name: "City Mahal Chinese & Convention Center Estiment:250-270 Location:Shadhin Bangla Super Market, 105/1/A, Mirpur‑1, Dhaka 1216", price: 117000, img: "image/con3.avif" },
          { name: "Baridhara DOHS Convention Center Estiment:200-230 Location:Eastern Road, Baridhara DOHS, Dhaka 1206", price: 100000, img: "image/con4.avif" },
          { name: "DSS Convention Center Estiment:250-270 Location:2nd Floor, 586/1 West Shawrapara, Begum Rokeya Soroni, Dhaka 1216", price: 115000, img: "image/con5.avif" },
          { name: "Polwel Convention Center Estiment: 200-230 Location:Plot 9/B2, Sector‑8, Near Abdullahpur, Uttara, Dhaka 1230 ", price: 95000, img: "image/con6.avif" },
          { name: "Pearl Harbour Community Center Estiment:230-260 Location:Matador Harbour, 102 Azimpur Road, Dhaka 1205", price: 120000, img: "image/con7.avif" },
          { name: "Kabooz Convention Center Estiment: 180-240 Location: House #741, Eastern Elite Center (Level 5), Road 9/A, Satmasjid Road, Dhanmondi, Dhaka 1209", price: 120000, img: "image/con8.avif" },
          { name: "Samurai Convention Center Estiment: 220-240 Location: 23/G/6 Panthapath (near Press Club), Dhaka 1205", price: 10000, img: "image/con9.avif" },
          { name: "Siraj Convention Center Estiment: 280-300 Location: Aftab Nagar Main Road, Badda, Dhaka", price: 105000, img: "image/con10.avif" },
          { name: "Falcon Hall  Estiment: 280-300 Location: Dhanmondi, Dhaka", price: 112000, img: "image/con11.avif" },
          { name: "Amirimi Community Center Estiment: 300 Location:Dhanmondi, Dhaka 1205", price: 115000, img: "image/con12.avif" },
        ]
      },
      Hotels: {
        img: "image/hotel.jpg",
        items: [
          { name: "Pan Pacific Sonargaon Dhaka Estiment:200 Location: 107 Kazi Nazrul Islam Avenue, Dhaka 1215 ", price: 170000, img: "image/hot1.jpg" },
          { name: "The Westin Dhaka  Estiment: 220 Location:Plot 01, Road 45, Gulshan-2, Dhaka 1212 ", price: 100000, img: "image/hot2.jpg" },
          { name: "InterContinental Dhaka Estiment: 250 Location: 1 Minto Road, Ramna, Dhaka 1000  ", price: 175000, img: "image/hot3.avif" },
          { name: "Radisson Blu Dhaka Water Garden Estiment:260 Location:Airport Road, Dhaka Cantonment, Dhaka 1206 ", price: 130000, img: "image/hot4.jpg" },
          { name: "Le Méridien Dhaka Estiment: 210 Location:79/A Airport Road, Nikunja 2, Dhaka 1229  ", price: 125000, img: "image/hot5.avif" },
          { name: "Dhaka Regency Hotel & Resort Estiment: 270 Location:Airport Road, Nikunja 2, Dhaka 1229 ", price: 120000, img: "image/hot6.jpg" },
          { name: "Six Seasons Hotel Estiment:200 Location:House 19, Road 96, Gulshan-2, Dhaka 1212 ", price: 110000, img: "image/hot7.jpg" },
          { name: "Hotel Sarina Dhaka Estiment:150 Location: 27 Banani C/A, Road 17, Dhaka 1213 ", price: 100000, img: "image/hot8.JPEG" },
          { name: "Amari Dhaka Estiment: 125 Location:  House 47, Road 41, Gulshan 2, Dhaka 1212 ", price: 125000, img: "image/hot9.jpeg" },
          { name: "Hotel Agrabad Estiment: 180 Location: Agrabad Commercial Area, Chattogram 4100  ", price: 130000, img: "image/hot10.jpg" },
          { name: "Rose View Hotel Estiment: 230 Location:Shahjalal Uposhohor, Sylhet 3100  ", price: 165000, img: "image/hot11.jpg" },
          { name: "Grand Sultan Tea Resort & Golf Estiment: 190 Location: Radhanagar, Srimangal 3210, Moulvibazar ", price: 200000, img: "image/hot12.JPEG" },          
        ]
      },
      Resorts: {
        img: "image/resort.jpg",
        items: [
          { name: "Rooftop Bliss", price: 1700, img: "https://via.placeholder.com/220x130?text=Rooftop+Bliss" }
        ]
      },
      Restaurants: {
        img: "image/resturant.avif",
        items: [
          { name: "Rooftop Bliss", price: 1700, img: "https://via.placeholder.com/220x130?text=Rooftop+Bliss" }
        ]
      },
       Community: {
        img: "image/community.jpg",
        items: [
          { name: "Rooftop Bliss", price: 1700, img: "https://via.placeholder.com/220x130?text=Rooftop+Bliss" }
        ]
      },
      Cruise  : {
        img: "image/cruish.webp",
        items: [
          { name: "Rooftop Bliss", price: 1700, img: "https://via.placeholder.com/220x130?text=Rooftop+Bliss" }
        ]
      },
      Stadiums: {
        img: "image/stadiumcat.webp",
        items: [
          { name: "Rooftop Bliss", price: 1700, img: "https://via.placeholder.com/220x130?text=Rooftop+Bliss" }
        ]
      },
      Academy: {
        img: "image/academy.jpg",
        items: [
          { name: "Rooftop Bliss", price: 1700, img: "https://via.placeholder.com/220x130?text=Rooftop+Bliss" }
        ]
      },
      // Add more subcategories if needed...
    }
  },
  catering: {
    img: "image/catering.jpg",
    subcategories: {
      Buffet: {
        img: "image/buffet.jpg",
        items: [
          { name: "Premium Buffet", price: 900, img: "https://via.placeholder.com/220x130?text=Premium+Buffet" }
        ]
      },
      Plated: {
        img: "image/plated.jpg",
        items: [
          { name: "Standard Meal", price: 700, img: "https://via.placeholder.com/220x130?text=Standard+Meal" }
        ]
      },
      
      "Full Service Catering": {
        img: "https://via.placeholder.com/100?text=Plated",
        items: [
          { name: "Standard Meal", price: 700, img: "https://via.placeholder.com/220x130?text=Standard+Meal" }
        ]
      },
      "Wedding Catering": {
        img: "https://via.placeholder.com/100?text=Plated",
        items: [
          { name: "Standard Meal", price: 700, img: "https://via.placeholder.com/220x130?text=Standard+Meal" }
        ]
      },
      "Food Truck Catering" : {
        img: "https://via.placeholder.com/100?text=Plated",
        items: [
          { name: "Standard Meal", price: 700, img: "https://via.placeholder.com/220x130?text=Standard+Meal" }
        ]
      },
      "Live Station Catering": {
        img: "https://via.placeholder.com/100?text=Plated",
        items: [
          { name: "Standard Meal", price: 700, img: "https://via.placeholder.com/220x130?text=Standard+Meal" }
        ]
      },
      "Plated/Sit-down Catering" : {
        img: "https://via.placeholder.com/100?text=Plated",
        items: [
          { name: "Standard Meal", price: 700, img: "https://via.placeholder.com/220x130?text=Standard+Meal" }
        ]
      },
      "Social Event Catering" : {
        img: "https://via.placeholder.com/100?text=Plated",
        items: [
          { name: "Standard Meal", price: 700, img: "https://via.placeholder.com/220x130?text=Standard+Meal" }
        ]
      },
      "Corporate Catering": {
        img: "https://via.placeholder.com/100?text=Plated",
        items: [
          { name: "Standard Meal", price: 700, img: "https://via.placeholder.com/220x130?text=Standard+Meal" }
        ]
      },
    }
  },
  photography: {
    img: "image/photography.jpg",
    subcategories: {
      "Full Package": {
        img: "https://via.placeholder.com/100?text=Full+Package",
        items: [
          { name: "Photo + Video", price: 1000, img: "https://via.placeholder.com/220x130?text=Photo+%2B+Video" }
        ]
      },
      Basic: {
        img: "https://via.placeholder.com/100?text=Basic",
        items: [
          { name: "Photo Only", price: 700, img: "https://via.placeholder.com/220x130?text=Photo+Only" }
        ]
      },
      Premimum: {
        img: "https://via.placeholder.com/100?text=Basic",
        items: [
          { name: "Photo Only", price: 700, img: "https://via.placeholder.com/220x130?text=Photo+Only" }
        ]
      },
      Royal: {
        img: "https://via.placeholder.com/100?text=Basic",
        items: [
          { name: "Photo Only", price: 700, img: "https://via.placeholder.com/220x130?text=Photo+Only" }
        ]
      },
      Special: {
        img: "https://via.placeholder.com/100?text=Basic",
        items: [
          { name: "Photo Only", price: 700, img: "https://via.placeholder.com/220x130?text=Photo+Only" }
        ]
      }
    }
  },
  lighting: {
    img: "image/light.avif",
    subcategories: {
      Ambient : {
        img: "https://via.placeholder.com/100?text=LED",
        items: [
          { name: "LED Setup", price: 400, img: "https://via.placeholder.com/220x130?text=LED+Setup" }
        ]
      },
      Accent : {
        img: "https://via.placeholder.com/100?text=Stage",
        items: [
          { name: "Stage Lighting", price: 600, img: "https://via.placeholder.com/220x130?text=Stage+Lighting" }
        ]
      },
      Decorative  : {
        img: "https://via.placeholder.com/100?text=Stage",
        items: [
          { name: "Stage Lighting", price: 600, img: "https://via.placeholder.com/220x130?text=Stage+Lighting" }
        ]
      },
      Stage   : {
        img: "https://via.placeholder.com/100?text=Stage",
        items: [
          { name: "Stage Lighting", price: 600, img: "https://via.placeholder.com/220x130?text=Stage+Lighting" }
        ]
      },
      Effect    : {
        img: "https://via.placeholder.com/100?text=Stage",
        items: [
          { name: "Stage Lighting", price: 600, img: "https://via.placeholder.com/220x130?text=Stage+Lighting" }
        ]
      },
      Outdoor    : {
        img: "https://via.placeholder.com/100?text=Stage",
        items: [
          { name: "Stage Lighting", price: 600, img: "https://via.placeholder.com/220x130?text=Stage+Lighting" }
        ]
      },
      Intelligent  : {
        img: "https://via.placeholder.com/100?text=Stage",
        items: [
          { name: "Stage Lighting", price: 600, img: "https://via.placeholder.com/220x130?text=Stage+Lighting" }
        ]
      },
    }
  },
  Electric: {
    img: "image/elec.jpg",
    subcategories: {
      PowerSupply : {
        img: "https://via.placeholder.com/100?text=Full+Package",
        items: [
          { name: "Photo + Video", price: 1000, img: "https://via.placeholder.com/220x130?text=Photo+%2B+Video" }
        ]
      },
      
    }
  }, 
  Entertainment: {
    img: "image/Entertainment.webp",
    subcategories: {
      Soundsystem : {
        img: "https://via.placeholder.com/100?text=Full+Package",
        items: [
          { name: "Photo + Video", price: 1000, img: "https://via.placeholder.com/220x130?text=Photo+%2B+Video" }
        ]
      },
      LED  : {
        img: "https://via.placeholder.com/100?text=Basic",
        items: [
          { name: "Photo Only", price: 700, img: "https://via.placeholder.com/220x130?text=Photo+Only" }
        ]
      },
      Floorsetup : {
        img: "https://via.placeholder.com/100?text=Basic",
        items: [
          { name: "Photo Only", price: 700, img: "https://via.placeholder.com/220x130?text=Photo+Only" }
        ]
      },
      Acts : {
        img: "https://via.placeholder.com/100?text=Basic",
        items: [
          { name: "Photo Only", price: 700, img: "https://via.placeholder.com/220x130?text=Photo+Only" }
        ]
      },
    }
  }, 
};

const itemsSection = document.getElementById('itemsSection');
const subcategorySection = document.getElementById('subcategorySection');
const cartItemsList = document.getElementById('cartItems');
const totalCostSpan = document.getElementById('totalCost');
const toast = document.getElementById('toast');

let cart = [];

function showItems(category) {
  itemsSection.innerHTML = "";
  subcategorySection.innerHTML = "";

  const subcategories = itemsData[category].subcategories;

  Object.keys(subcategories).forEach(subcat => {
    const sub = subcategories[subcat];
    const div = document.createElement("div");
    div.className = "subcategory-card";
    div.innerHTML = `
      <img src="${sub.img}" alt="${subcat}" />
      <span>${subcat}</span>
    `;
    div.onclick = () => showSubItems(category, subcat);
    subcategorySection.appendChild(div);
  });
}

function showSubItems(category, subcat) {
  itemsSection.innerHTML = "";
  const items = itemsData[category].subcategories[subcat].items;

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = "item-card";

    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      <h4>${item.name}</h4>
      <p>${item.price}Tk</p>
    `;

    const btn = document.createElement('button');
    btn.textContent = "Add";
    btn.addEventListener('click', () => addToCart(item.name, item.price));

    card.appendChild(btn);
    itemsSection.appendChild(card);
  });
}

function loadCategories() {
  const container = document.querySelector(".category-list");
  container.innerHTML = "";

  Object.keys(itemsData).forEach(category => {
    const div = document.createElement("div");
    div.className = "category";
    div.onclick = () => showItems(category);
    div.innerHTML = `
      <img src="${itemsData[category].img}" alt="${category}" />
      <span>${category.charAt(0).toUpperCase() + category.slice(1)}</span>
    `;
    container.appendChild(div);
  });
}

function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  cartItemsList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = "x";
    removeBtn.title = "Remove";
    removeBtn.addEventListener('click', () => removeFromCart(index));

    li.appendChild(removeBtn);
    cartItemsList.appendChild(li);

    total += item.price;
  });

  totalCostSpan.textContent = total.toFixed(2);
}

function checkoutCart() {
  if(cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cart = [];
  renderCart();
  showToast(`Checkout successful! Total: $${total.toFixed(2)}`);

  setTimeout(() => {
    window.location.href = "checkout.html"; // Adjust URL as needed
  }, 2000);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Init
loadCategories();
renderCart();
document.getElementById("cartToggleBtn").addEventListener("click", () => {
  const panel = document.getElementById("cartPanel");
  panel.classList.toggle("open");
});
