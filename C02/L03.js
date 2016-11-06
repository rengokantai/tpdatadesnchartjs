var ctx = $("#line-chart");
var lineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "2015",
        data: [10,8,6,5,null,8,16,17,6,7,6,10],
        backgroundColor:"rgba(200,0,0,.5)",
        borderWidth:1,
        pointRadius:2,
        pointHoverRadius:7,
        pointBorderColor:"black",
        pointBackgroundColor:"yellow",
        pointHoverBorderColor:"yellow",
        pointHoverBackgroundColor:"black",
        pointStyle:'triangle', //rectRot cross crossRot star
        //showLine: false
        spanGaps:true
        //steppedLine:true
      }
    ]
  },
  options:{
    maintainAspectRatio:false
  }
});


