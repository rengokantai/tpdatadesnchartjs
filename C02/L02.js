var ctx = $("#line-chart");
var lineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "2015",
        data: [10,8,6,5,12,8,16,17,6,7,6,10],
        backgroundColor:"rgba(200,0,0,.5)",
        borderColor:"black",
        borderWidth:2

      }
    ]
  },
  options:{
    maintainAspectRatio:false
  }
});


var ctx2 = $("#line-chart2");
var lineChart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "2015",
        data: [10,8,6,5,12,8,16,17,6,7,6,10],
        borderColor:"black",
        borderWidth:2

      }
    ]
  },
  options:{
    maintainAspectRatio:false
  }
});