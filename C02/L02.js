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
        fill:false, //default:grey, add this to enable transparent
        borderColor:"black",
        borderWidth:1,
        lineTension:0,   //0-1,leave it default.
        borderDash:[5,5] //5line followed by 5 dash
      }
    ]
  },
  options:{
    maintainAspectRatio:false
  }
});