import { MarkGithubIcon } from '@primer/octicons-react'
import sharedStyles  from '../../styles/Section.module.scss'
import styles from './UserData.module.scss'

export default function UserData() {
  const userProfileStats = {
    repos: {
      label: 'Public Repositories',
      summary: '9',
    },
    joined: {
      label: 'Joined GitHub',
      summary: '2 years ago',
    },
    location: {
      label: 'Location',
      summary: 'Ukraine',
    },
  }

  return (
    <section>
      <div className={sharedStyles.wrapper}>
        <div className={styles.container}>
          {/* TODO: Fetch an image from the API */}
          <div className={styles.avatar}>
            <img src="https://via.placeholder.com/150" alt='User avatar' />
          </div>
          <div className={styles.details}>
            <div className={styles.details__header}>
              <div className={styles.profile}>
                <h1 className={styles.profile__fullname}>Dmytro Rykhlyk</h1>
                <h2 className={styles.profile__nickname}>ryuuto829</h2>
              </div>
              <div className={styles.follow}>
                <button className={styles.follow__btn}>
                  <MarkGithubIcon size='24' />
                  <span>Follow</span>
                </button>
              </div>
            </div>
            <ul className={styles.stats}>
              {Object.keys(userProfileStats).map((item, i) => {
                const { label, summary } = userProfileStats[item]

                return (
                  <li key={i}>
                    <span className={styles.stats__label}>{label}</span>
                    <span className={styles.stats__summary}>{summary}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
