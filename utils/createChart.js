export const chartOptions = {
  plugins: {
    legend: {
      display: true,
      position: 'left',
      maxWidth: 200,
      labels: {
        boxWidth: 12,
        color: 'rgba(255, 255, 255, 0.87)',
      },
    },
  },
}

export const createChart = (labels, data) => ({
  labels: labels,
  datasets: [
    {
      label: '# of Votes',
      data: data,
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 255, 255, 0.87)',
      ],
      borderWidth: 2,
    },
  ],
})
