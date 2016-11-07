var ctx = $("#pie-chart");

var pieLabels = ["Apple", "Pecan", "Key Lime", "Cherry", "Coconut"];

var pieData = [10,10,8,4,1];

var pieColors = [
  "rgb(153,21,0)",
  "rgb(189,90,45)",
  "rgb(208,255,113)",
  "rgb(255,36,0)",
  "rgb(194,250,255)"
];


var pieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: pieLabels,
    datasets: [
      {
        data: pieData,
        backgroundColor: pieColors
      }
    ]
  },
  options: {
    maintainAspectRatio: false
  }
});


var ctx2 = $("#pie-chart2");
var pieChart2 = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: pieLabels,
    datasets: [
      {
        data: pieData,
        backgroundColor: pieColors,
        borderColor: "#333"
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontColor: "#ddd"
      }
    }
  }
});