import PropTypes from 'prop-types'
import { XCircleFillIcon } from '@primer/octicons-react'
import sharedStyles from '../../styles/Section.module.scss'
import styles from './ErrorMessage.module.scss'

export default function ErrorMessage({ error }) {
  return (
    <section className={sharedStyles.error}>
      <div className={sharedStyles.wrapper}>
        <div className={styles.container}>
          <XCircleFillIcon size={16} />
          <span className={styles.text}>

            {error === 404 ? (
              `User not found! Change the username and try again.`
            ) : error === 403 ? (
              `You hit the rate limit! Try again later.`
            ) : (
              `Something went wrong. Try again later.`
            )}

          </span>
        </div>
      </div>
    </section>
  )
}

ErrorMessage.propTypes = {
  error: PropTypes.number,
}
