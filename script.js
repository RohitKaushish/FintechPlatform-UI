const ctx = document.getElementById('financeChart');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Jan","Feb","Mar","Apr","May","Jun"],
    datasets: [{
      label: "Wallet Activity",
      data: [12000, 18000, 15000, 26000, 22000, 29000],
      borderWidth: 2
    }]
  }
});
