import { MarkGithubIcon } from '@primer/octicons-react'
import sharedStyles  from '../../styles/Section.module.scss'
import styles from './Search.module.scss'

export default function Search() {
  // TODO: Fetch data from the limiter
  const [requestLeft, requestLimit] = [49, 50]

  return (
    <section>
      <div className={sharedStyles.container}>
        <header className={styles.header}>
          <span className={styles.header__icon}>
            <MarkGithubIcon size="32"  />
          </span>
          <h2 className={styles.header__title}>GHProfile Summary</h2>
        </header>
        <form>
          <label htmlFor="userURL" className={styles.label}>
            Search your GitHub username
          </label>
          <div className={styles.control}>
            <input
              className={styles.control__input}
              name="userURL"
              type="text"
              placeholder={`ex. 'ryuuto829'`}
            />
            <span className={styles.control__limit}>
              {`${requestLeft} / ${requestLimit} REQUESTS LEFT`}
            </span>
          </div>
        </form>
      </div>
    </section>
  )
}
