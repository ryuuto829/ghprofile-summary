import PropTypes from 'prop-types'
import sharedStyles from '../../styles/Section.module.scss'
import styles from './Loading.module.scss'

const Loading = ({ message }) => (
  <section className={sharedStyles.full}>
    <div className={styles.container}>

      {/* CSS loading animations taken from https://loading.io/css/ */}
      <div className={styles['ring-spinner']}>
        <div></div><div></div><div></div><div></div>
      </div>

      <span className={styles.message}>{message || 'Data is loading'}</span>
    </div>
  </section>
)

export default Loading

Loading.propTypes = {
  message: PropTypes.string,
}
