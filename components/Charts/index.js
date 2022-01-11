import PropTypes from 'prop-types'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

import sharedStyles  from '../../styles/Section.module.scss'
import styles from './Charts.module.scss'

import { createChart, chartOptions } from '../../utils'
import settings from '../settings'

ChartJS.register(ArcElement, Tooltip, Legend)

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
    <Doughnut data={data} options={chartOptions} />
  )
}

const StarsPerRepoChart = ({ userReposList }) => {
  const starredRepos = userReposList
    .filter(repo => repo.stargazers_count > 0)

  const sortedStarredRepos = starredRepos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)

  const starredReposNames = sortedStarredRepos
    .map(repo => repo.name).slice(0, settings.maxChartItems)

  const starredReposCount = sortedStarredRepos
    .map(item => item.stargazers_count).slice(0, settings.maxChartItems)

  const data = createChart(starredReposNames, starredReposCount)

  return (
    <Doughnut data={data} options={chartOptions} />
  )
}

const CommitsPerRepoChart = ({ reposCommits }) => {
  const labels = []
  const values = []

  for (const prop of reposCommits) {
    labels.push(prop[0])
    values.push(prop[1])
  }

  const data = createChart(labels, values)

  return (
    <Doughnut data={data} options={chartOptions} />
  )
}

export default function Charts({ userReposList, reposCommits }) {
  return (
    <section>
      <div className={sharedStyles.wrapper}>
        <div className={styles.container}>

          {/* Chart 1. Repos per Language */}
          <div className={styles.chart}>
            <header className={styles.chart__header}>
              <h2 className={styles.chart__title}>Repos per Language</h2>
            </header>
            <div className={styles.chart__graph}>
              <ReposPerLanguageChart userReposList={userReposList} />
            </div>
          </div>

          {/* Chart 2. Stars per Repo (top 10) */}
          <div className={styles.chart}>
            <header className={styles.chart__header}>
              <h2 className={styles.chart__title}>Stars per Repo</h2>
              <span className={styles.chart__badge}>Top 10</span>
            </header>
            <div className={styles.chart__graph}>
              <StarsPerRepoChart userReposList={userReposList} />
            </div>
          </div>

          {/* Chart 3. Commits per Repo (recent 10) */}
          <div className={styles.chart}>
            <header className={styles.chart__header}>
              <h2 className={styles.chart__title}>Commits per Repo</h2>
              <span className={styles.chart__badge}>Latest 10</span>
            </header>

            <div className={styles.chart__graph}>
              <CommitsPerRepoChart reposCommits={reposCommits} />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

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

