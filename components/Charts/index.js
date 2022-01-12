import PropTypes from 'prop-types'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import sharedStyles  from '../../styles/Section.module.scss'
import styles from './Charts.module.scss'
import { createChart, chartOptions } from '../../utils'
import settings from '../settings'

// Apply plugins on all charts globally
// Read more: https://www.chartjs.org/docs/3.4.1/developers/plugins.html
ChartJS.register(ArcElement, Tooltip, Legend)

const Graph = ({ data, chartOptions, chartTitle, badgeText }) => (
  <>
    {data.labels.length !== 0 && (
      <div className={styles.chart}>
        <header className={styles.chart__header}>
          <h2 className={styles.chart__title}>{chartTitle}</h2>
          {badgeText && (
            <span className={styles.chart__badge}>{badgeText}</span>
          )}
        </header>
        <div className={styles.chart__graph}>
          <Doughnut data={data} options={chartOptions} />
        </div>
      </div>
    )}
  </>
)

const ReposPerLanguageChart = ({ userReposList }) => {
  const langLabels = userReposList
    .map(repo => repo.language)
    .filter(lang => lang !== null)
  const uniquelangLabels = Array.from(new Set(langLabels))
    .slice(0, settings.maxChartItems)
  const langCountData = uniquelangLabels
    .map(label => langLabels.filter(lang => lang === label).length)
    .slice(0, settings.maxChartItems)

  const data = createChart(uniquelangLabels, langCountData)

  return (
    <Graph
      data={data}
      chartOptions={chartOptions}
      chartTitle='Repos per Language'
    />
  )
}

const StarsPerRepoChart = ({ userReposList }) => {
  const starredRepos = userReposList
    .filter(repo => repo.stargazers_count > 0)
  const sortedStarredRepos = starredRepos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
  const starredReposNames = sortedStarredRepos
    .map(repo => repo.name)
    .slice(0, settings.maxChartItems)
  const starredReposCount = sortedStarredRepos
    .map(item => item.stargazers_count)
    .slice(0, settings.maxChartItems)

  const data = createChart(starredReposNames, starredReposCount)

  return (
    <Graph
      data={data}
      chartOptions={chartOptions}
      chartTitle='Stars per Repo'
      badgeText='Top 10'
    />
  )
}

const CommitsPerRepoChart = ({ reposCommits }) => {
  const labels = new Array()
  const values = new Array()

  for (const prop of reposCommits) {
    labels.push(prop[0])
    values.push(prop[1])
  }

  const data = createChart(labels, values)

  return (
    <Graph
      data={data}
      chartOptions={chartOptions}
      chartTitle='Commits per Repo'
      badgeText='Latest 10'
    />
  )
}

const Charts = ({ userReposList, reposCommits }) => (
  <section>
    <div className={sharedStyles.wrapper}>
      <div className={styles.container}>

        {/* Chart 1. Repos per Language */}
        <ReposPerLanguageChart userReposList={userReposList} />

        {/* Chart 2. Stars per Repo (Top 10) */}
        <StarsPerRepoChart userReposList={userReposList} />

        {/* Chart 3. Commits per Repo (Latest 10) */}
        <CommitsPerRepoChart reposCommits={reposCommits} />

      </div>
    </div>
  </section>
)

export default Charts

Charts.propTypes = {
  userReposList: PropTypes.arrayOf(
    PropTypes.shape({
      forks_count: PropTypes.number,
      stargazers_count: PropTypes.number,
      html_url: PropTypes.string,
      language: PropTypes.string,
      name: PropTypes.string,
      size: PropTypes.number,
    }),
  ),
  reposCommits: PropTypes.arrayOf(PropTypes.array),
}

Graph.propTypes = {
  data: PropTypes.object,
  chartOptions: PropTypes.object,
  chartTitle: PropTypes.string,
  badgeText: PropTypes.string,
}
