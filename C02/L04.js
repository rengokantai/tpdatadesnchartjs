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
      },
      {
        label: "2016",
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#090",
        fill: false,
        data: [10,8,6,5,12,8,16,17,6,7,6,10]
      }
    ]
  },
  options: {
     maintainAspectRatio: false,
    scales: {
      yAxes: [{stacked: true}]  //means adding previous data set
    }
  }
});