var ctx = $("#line-chart");
var lineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "2015",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#900",
        fill: false,
        data: [6,10,9,6,14,12,16,13,9,7,6,10]
      }
    ]
  },
  options: {
    maintainAspectRatio: false
  }
});