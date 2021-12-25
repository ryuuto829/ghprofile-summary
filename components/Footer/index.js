import { MarkGithubIcon } from '@primer/octicons-react'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        {'GHProfile summary is built with '}
        <a href="https://nextjs.org/">Next.js</a>
        {' and '}
        <a href="https://www.chartjs.org/">chart.js</a>.
      </div>
      <a
        href="https://github.com/ryuuto829/ghprofile-summary"
        className={styles['footer__repo-source']}>
        <MarkGithubIcon size={16} />
        <span>Source on GitHub</span>
      </a>
    </footer>
  )
}
