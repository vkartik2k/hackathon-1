var data = {
    labels: ["AP 101", "MA101", "EE101", "FEC A", "FEC B"],
    datasets: [{
      label: "Total Scores",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      responsive:true,
      data: [65, 59, 20, 81, 56, 55, 40],
    }]
  };
  
  var option = {
    responsive: false,
    scales: {
      yAxes: [{
        stacked: true,
        gridLines: {
          display: true,
          color: "rgba(255,99,132,0.2)"
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  };
  
  Chart.Bar('chart_0', {
    options: option,
    data: data
  });
  chart.canvas.parentNode.style.height = '140px';
  chart.canvas.parentNode.style.width = '140px';  