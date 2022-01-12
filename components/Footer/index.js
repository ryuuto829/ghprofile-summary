import { MarkGithubIcon } from '@primer/octicons-react'
import styles from './Footer.module.scss'
import settings from '../settings'

const Footer = () => (
  <footer className={styles.container}>
    <div>
      <div className={styles.tools}>
        {'GHProfile summary is built with '}
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>
        {' and '}
        <a
          href="https://www.chartjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chart.js
        </a>
        {'.'}
      </div>
      <a
        href={settings.appGithubRepo}
        className={styles.source}>
        <MarkGithubIcon size={16} />
        <span>Source on GitHub</span>
      </a>
    </div>
  </footer>
)

export default Footer
