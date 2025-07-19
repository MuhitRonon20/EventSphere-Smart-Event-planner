const events = {
  "Wedding Gala": [
    { name: "Book venue", status: "pending" },
    { name: "Confirm catering", status: "pending" },
    { name: "Hire photographer", status: "done" }
  ],
  "Tech Conference": [
    { name: "Finalize speaker list", status: "done" },
    { name: "Print brochures", status: "pending" },
    { name: "Setup stage", status: "pending" }
  ]
};

const eventButtons = document.getElementById("eventButtons");
const taskList = document.getElementById("taskList");
const eventTitle = document.getElementById("eventTitle");
const progressBar = document.getElementById("progressBar");

function renderEventButtons() {
  Object.keys(events).forEach(eventName => {
    const btn = document.createElement("button");
    btn.textContent = eventName;
    btn.onclick = () => loadTasks(eventName);
    const li = document.createElement("li");
    li.appendChild(btn);
    eventButtons.appendChild(li);
  });
}

function loadTasks(eventName) {
  eventTitle.textContent = eventName + " - Task List";
  taskList.innerHTML = "";
  events[eventName].forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task.name}</span>
      <div>
        <span class="status">${task.status}</span>
        <button class="${task.status === 'done' ? 'pending-btn' : 'done-btn'}">
          ${task.status === 'done' ? 'Mark Pending' : 'Mark Done'}
        </button>
      </div>
    `;
    const btn = li.querySelector("button");
    btn.addEventListener("click", () => {
      task.status = task.status === "done" ? "pending" : "done";
      updateProgress(eventName);
      loadTasks(eventName);
      if (task.status === "done") {
        showNotification(`✅ "${task.name}" marked as completed.`);
      }
    });
    taskList.appendChild(li);
  });

  updateProgress(eventName);
}

function updateProgress(eventName) {
  const tasks = events[eventName];
  const total = tasks.length;
  const done = tasks.filter(task => task.status === "done").length;
  const percent = (done / total) * 100;
  progressBar.style.width = percent + "%";
}

function showNotification(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  renderEventButtons();
});
