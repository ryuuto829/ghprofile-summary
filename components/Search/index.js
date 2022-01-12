import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MarkGithubIcon } from '@primer/octicons-react'

import sharedStyles  from '../../styles/Section.module.scss'
import styles from './Search.module.scss'
import settings from '../settings'

const Search = ({
  changeUserInputText,
  submitUsername,
  username,
  rateLimit,
}) => {
  const { pathname } = useRouter()
  const { limit, remaining } = rateLimit || { limit: 60, remaining: 60 }

  return (
    <section>
      <div className={sharedStyles.container}>

        <Link href="/">
          {/* Next JS will send href property to its child */}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <header className={styles.header}>
              <span className={styles.header__icon}>
                <MarkGithubIcon size="32" />
              </span>
              <h2 className={styles.header__title}>{settings.defaultTitle}</h2>
            </header>
          </a>
        </Link>

        <form onSubmit={submitUsername}>
          <label htmlFor="userURL" className={styles.label}>
            Search GitHub username
          </label>
          <div className={styles.control}>
            <input
              className={styles.control__input}
              name="userURL"
              type="text"
              placeholder={`ex. 'ryuuto829'`}
              onChange={e => changeUserInputText(e)}
              value={username}
            />
            {pathname !== '/' && (
              <span className={styles.control__limit}>
                {`${remaining} / ${limit} REQUESTS LEFT`}
              </span>
            )}
          </div>
        </form>

      </div>
    </section>
  )
}

export default Search

Search.propTypes = {
  changeUserInputText: PropTypes.func,
  submitUsername: PropTypes.func,
  username: PropTypes.string,
  rateLimit: PropTypes.shape({
    limit: PropTypes.number,
    remaining: PropTypes.number,
  }),
}
