export const chartOptions = {
  plugins: {
    legend: {
      display: true,
      position: 'left',
      maxWidth: 115,
      labels: {
        boxWidth: 12,
        color: 'rgba(255, 255, 255, 0.87)',
      },
    },
  },
}

/**
 * Build Chart.js "data" property
 *
 * @param {Array} labels - labels for dataset
 * @param {Array} data - dataset
 */
export const createChart = (labels, data) => ({
  labels: labels,
  datasets: [
    {
      label: '# of Votes',
      data: data,
      backgroundColor: [
        '#00876ccc',
        '#63b179cc',
        '#88c580cc',
        '#d6ec91cc',
        '#ffff9dcc',
        '#fee17ecc',
        '#fcc267cc',
        '#f7a258cc',
        '#ef8250cc',
        '#e4604ecc',
      ],
      borderColor: [
        '#0e1e25',
      ],
      borderWidth: 2,
    },
  ],
})
