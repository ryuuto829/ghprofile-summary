import PropTypes from 'prop-types'
import { MarkGithubIcon } from '@primer/octicons-react'
import sharedStyles  from '../../styles/Section.module.scss'
import styles from './UserData.module.scss'
import { formatDifferenceInYears } from '../../utils'

export default function UserData( { userAccountInfo }) {
  const {
    public_repos,
    location,
    created_at,
    login,
    name,
    html_url } = userAccountInfo
  const joinedGithubInYears = formatDifferenceInYears(created_at)

  const userProfileStats = {
    repos: {
      label: 'Public Repositories',
      summary: public_repos || '',
    },
    joined: {
      label: 'Joined GitHub',
      summary: joinedGithubInYears || '',
    },
    location: {
      label: 'Location',
      summary: location || '',
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
                <h1 className={styles.profile__fullname}>{name}</h1>
                <h2 className={styles.profile__nickname}>{login}</h2>
              </div>
              <div className={styles.follow}>
                <a href={html_url} className={styles.follow__btn}>
                  <MarkGithubIcon size='24' />
                  <span>Follow</span>
                </a>
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

UserData.propTypes = {
  userAccountInfo: PropTypes.shape({
    public_repos: PropTypes.number,
    location: PropTypes.string,
    created_at: PropTypes.string,
    login: PropTypes.string,
    name: PropTypes.string,
    html_url: PropTypes.string,
  }),
}
