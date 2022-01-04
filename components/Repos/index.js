import { RepoIcon, StarFillIcon, RepoForkedIcon } from '@primer/octicons-react'
import sharedStyles  from '../../styles/Section.module.scss'
import styles from './Repos.module.scss'

export default function Repos() {
  return (
    <section>
      <div className={sharedStyles.wrapper}>
        <h2 className={sharedStyles.header}>Top Repos</h2>
        <ul className={styles.list}>
          {[...Array(10).keys()].map(i => (
            <li key={i}>
              <a href='#' className={styles.item}>
                <div className={styles.item__header}>
                  <RepoIcon size={24} />
                  <h3 className={styles.item__title}>Portfolio</h3>
                </div>
                <div className={styles.item__footer}>
                  <div className={styles.item__stats}>
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
