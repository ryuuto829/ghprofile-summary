import PropTypes from 'prop-types'
import { RepoIcon, StarFillIcon, RepoForkedIcon } from '@primer/octicons-react'
import sharedStyles  from '../../styles/Section.module.scss'
import styles from './Repos.module.scss'

import { MAX_REPOS_ITEMS } from '../settings'

export default function Repos({ userReposList, username }) {
  return (
    <section>
      <div className={sharedStyles.wrapper}>
        <h2 className={sharedStyles.header}>Latest Repos</h2>

        {userReposList && userReposList.length !== 0 ?
          (
            <ul className={styles.list}>
              {userReposList
                .slice(0, MAX_REPOS_ITEMS)
                .map((item, i) => {
                  const {
                    forks_count,
                    html_url,
                    language,
                    name,
                    stargazers_count,
                    size,
                  } = item

                  return (
                    <li key={i}>
                      <a
                        href={html_url}
                        className={styles.item}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className={styles.item__header}>
                          <RepoIcon size={24} />
                          <h3 className={styles.item__title}>{name}</h3>
                        </div>
                        <div className={styles.item__footer}>
                          <div className={styles.item__stats}>
                            <span>{language}</span>
                            <span>
                              <StarFillIcon size={16} />
                              {stargazers_count}
                            </span>
                            <span>
                              <RepoForkedIcon size={16} />
                              {forks_count}
                            </span>
                          </div>
                          <span className={styles.item__size}>
                            {`${size.toLocaleString()} KB`}
                          </span>
                        </div>
                      </a>
                    </li>
                  )
                })}
            </ul>
          ) : (
            <div className={styles['not-found']}>
              {`${username} doesn't have any public unarchived repositories.`}
            </div>
          )
        }

      </div>
    </section>
  )
}

Repos.propTypes = {
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
  username: PropTypes.string,
}
