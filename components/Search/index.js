import { MarkGithubIcon } from '@primer/octicons-react'
import styles from './Search.module.scss'

export default function Search() {
  // TODO: Fetch data from the limiter
  const [requestLeft, requestLimit] = [49, 50]

  return (
    <section>
      <header className={styles.header}>
        <span className={styles.header__icon}>
          <MarkGithubIcon size="32"  />
        </span>
        <h2>GHProfile Summary</h2>
      </header>
      <form className={styles['user-form']}>
        <label htmlFor="userURL">
        Search your GitHub username
        </label>
        <div className={styles['user-form__input-container']}>
          <input
            name="userURL"
            type="text"
            placeholder={`ex. 'ryuuto829'`}
          />
          <span>
            {`${requestLeft} / ${requestLimit} REQUESTS LEFT`}
          </span>
        </div>
      </form>
    </section>
  )
}
