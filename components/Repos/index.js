import { RepoIcon, StarFillIcon, RepoForkedIcon } from '@primer/octicons-react'
import styles from './Repos.module.scss'

export default function Repos() {
  return (
    <section>
      <div className={styles['repo-section']}>
        <h2>Top Repos</h2>
        <ul className={styles['repo-list']}>
          {[...Array(10).keys()].map(i => (
            <li key={i}>
              <a href='#' className={styles.repo}>
                <div className={styles.repo__header}>
                  <RepoIcon size={24} />
                  <h3>Portfolio</h3>
                </div>
                <div className={styles.repo__footer}>
                  <div className={styles.repo__stats}>
                    <span>JavaScript</span>
                    <span>
                      <StarFillIcon size={16} />
                      {'10'}
                    </span>
                    <span>
                      <RepoForkedIcon size={16} />
                      {'10'}
                    </span>
                  </div>
                  <span>4,097 KB</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
