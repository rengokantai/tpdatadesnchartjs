var ctx = $("#bar-chart");
var lineChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "2015",
        data: [10,8,6,5,12,8,16,17,6,7,6,10],
        backgroundColor: [
          "rgba(242,166,54,.5)",
          "rgba(39,79,76,.5)",
          "rgba(40,161,130,.5)",
          "rgba(206,29,22,.5)",
          "rgba(242,166,54,.5)",
          "rgba(39,79,76,.5)",
          "rgba(40,161,130,.5)",
          "rgba(206,29,22,.5)",
          "rgba(242,166,54,.5)",
          "rgba(39,79,76,.5)",
          "rgba(40,161,130,.5)",
          "rgba(206,29,22,.5)"
        ],
        borderColor: [
          "rgb(242,166,54)",
          "rgb(39,79,76)",
          "rgb(40,161,130)",
          "rgb(206,29,22)",
          "rgb(242,166,54)",
          "rgb(39,79,76)",
          "rgb(40,161,130)",
          "rgb(206,29,22)",
          "rgb(242,166,54)",
          "rgb(39,79,76)",
          "rgb(40,161,130)",
          "rgb(206,29,22)"
        ],
        hoverBackgroundColor: [
          "rgb(242,166,54)",
          "rgb(39,79,76)",
          "rgb(40,161,130)",
          "rgb(206,29,22)",
          "rgb(242,166,54)",
          "rgb(39,79,76)",
          "rgb(40,161,130)",
          "rgb(206,29,22)",
          "rgb(242,166,54)",
          "rgb(39,79,76)",
          "rgb(40,161,130)",
          "rgb(206,29,22)"
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    }
  }
});