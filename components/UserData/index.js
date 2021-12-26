import { MarkGithubIcon } from '@primer/octicons-react'
import sharedStyles  from '../../styles/Section.module.scss'
import styles from './UserData.module.scss'

export default function UserData() {
  return (
    <section>
      <div className={sharedStyles.section}>
        {/* TODO: Fetch an image from the API */}
        <div className={styles.avatar}>
          <img src="https://via.placeholder.com/150" alt='User avatar' />
        </div>
        <div className={styles['user-info']}>
          <h1>Dmytro Rykhlyk</h1>
          <h2>ryuuto829</h2>
          <ul className={styles.stats}>
            <li>
              <span>Public Repositories</span>
              <span>9</span>
            </li>
            <li>
              <span>Joined GitHub</span>
              <span>2 years ago</span>
            </li>
            <li>
              <span>Location</span>
              <span>Ukraine</span>
            </li>
          </ul>
        </div>
        <button className={styles['btn-follow']}>
          <MarkGithubIcon size='24' />
          <span>Follow</span>
        </button>
      </div>
    </section>
  )
}
