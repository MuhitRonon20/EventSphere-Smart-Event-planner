let budget = 0;
let expenses = 0;
let transactions = [];

const totalBudget = document.getElementById('total-budget');
const totalExpense = document.getElementById('total-expense');
const balance = document.getElementById('balance');
const dashboardContent = document.getElementById('dashboardContent');

function setInitialBudget(event) {
  event.preventDefault();
  budget = parseFloat(document.getElementById('initialBudget').value);
  totalBudget.textContent = `$${budget.toFixed(2)}`;
  balance.textContent = `$${(budget - expenses).toFixed(2)}`;
  dashboardContent.style.display = 'block';
  document.querySelector('.hero').style.display = 'none';
  updatePieChart();
}

function openModal() {
  document.getElementById('transactionModal').style.display = 'flex';
}
function closeModal() {
  document.getElementById('transactionModal').style.display = 'none';
}

// Handle add transaction
function addTransaction(event) {
  event.preventDefault();
  const desc = document.getElementById('desc').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const type = document.getElementById('type').value;
  const date = document.getElementById('date').value;

  transactions.push({ desc, amount, type, date });

  if (type === 'expense') expenses += amount;

  totalExpense.textContent = `$${expenses.toFixed(2)}`;
  balance.textContent = `$${(budget - expenses).toFixed(2)}`;

  const table = document.getElementById('transaction-table').querySelector('tbody');
  const row = document.createElement('tr');
  row.innerHTML = `<td>${date}</td><td>${desc}</td><td>${type}</td><td>$${amount.toFixed(2)}</td>`;
  table.appendChild(row);

  document.getElementById('transactionModal').style.display = 'none';
  event.target.reset();
  updatePieChart();
}

// Pie Chart
let pieChart = null;

function updatePieChart() {
  const categoryTotals = {};

  transactions.forEach(t => {
    if (t.type === 'expense') {
      if (!categoryTotals[t.desc]) categoryTotals[t.desc] = 0;
      categoryTotals[t.desc] += t.amount;
    }
  });

  const labels = Object.keys(categoryTotals);
  const data = Object.values(categoryTotals);

  if (pieChart) {
    pieChart.data.labels = labels;
    pieChart.data.datasets[0].data = data;
    pieChart.update();
  } else {
    const ctx = document.getElementById('pieChart').getContext('2d');
    pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: [
            '#f97316', '#eab308', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: '#fff'
            }
          }
        }
      }
    });
  }
}
