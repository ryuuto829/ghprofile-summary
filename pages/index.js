import { Search, Footer, Head } from '../components'
import styles from '../styles/User.module.scss'
import { useUserSearch } from '../hooks'

export default function Home() {
  const {
    submitUsername,
    changeUserInputText,
    usernameInputText,
  } = useUserSearch()

  return (
    <main>
      <Head />

      <div className={styles.container}>
        <Search
          submitUsername={submitUsername}
          changeUserInputText={changeUserInputText}
          username={usernameInputText}
        />
      </div>

      <Footer />
    </main>
  )
}
