import PropTypes from 'prop-types'
import sharedStyles from '../../styles/Section.module.scss'
import styles from './Loading.module.scss'

// CSS loading animations taken from https://loading.io/css/
export default function Loading({ message }){
  return (
    <section className={sharedStyles.full}>
      <div className={styles.container}>
        <div className={styles['ring-spinner']}>
          <div></div><div></div><div></div><div></div>
        </div>
        <span className={styles.message}>{message || 'Data is loading'}</span>
      </div>
    </section>
  )
}

Loading.propTypes = {
  message: PropTypes.string,
}
