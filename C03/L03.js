var ctx = $("#bar-chart");
var data2015 = {
  label: "2015",
  data: [10,8,6,5,12,8,16,17,6,7,6,10],
  backgroundColor: "rgba(39,79,76,.5)",
  borderColor: "rgb(39,79,76)",
  borderWidth: 1
};

var data2016 = {
  label: "2016",
  data: [5,10,9,4,6,8,12,11,9,6,13,7],
  backgroundColor: "rgba(40,161,130,.5)",
  borderColor: "rgb(40,161,130)",
  borderWidth: 1
};

var lineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "2015",
        data: [10,8,6,5,12,8,16,17,6,7,6,10],
        backgroundColor: "rgba(39,79,76,.5)",
        borderColor: "rgb(39,79,76)",
        borderWidth: 1
      }
    ]
  },
  options: {
    maintainAspectRatio: false
  }
});