import { useEffect, useState } from 'react'
import {
  UserData,
  Search,
  Repos,
  Footer,
  Head,
  ErrorMessage,
} from '../components'
import { useUserSearch } from '../hooks'

import { MAX_REPOS_ITEMS } from '../components/settings'

export default function User(props) {
  const username = props.query.id

  const {
    submitUsername,
    changeUserInputText,
    usernameInputText,
  } = useUserSearch()

  const [userAccountInfo, setUserAccountInfo] = useState(null)
  const [userReposList, setUserReposList] = useState(null)
  const [error, setError] = useState(null)
  const [rateLimit, setRateLimit] = useState(null)

  const getUserData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`)

      if (response.status === 404) {
        return setError(404)
      }

      const result = await response.json()
      await setUserAccountInfo(result)
    } catch (error) {
      setError(400)
    }
  }

  const getUserReposList = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}\
        /repos?per_page=${MAX_REPOS_ITEMS}&sort=pushed`,
      )

      if (response.status === 404) {
        return setError(404)
      }

      const result = await response.json()
      await setUserReposList(result)
    } catch (error) {
      setError(400)
    }
  }

  const getRateLimit = async () => {
    try {
      const response = await fetch('https://api.github.com/rate_limit')
      const result = await response.json()

      if (result < 1 ) {
        setError(403)
      }

      await setRateLimit(result.resources.core)
    } catch (error) {
      setError(400)
    }
  }

  useEffect(() => {
    if (!username) {
      return
    }

    setError(null)
    getRateLimit()
    getUserData()
  }, [username])

  useEffect(() => {
    // Avoid fetching excess information before username is checked
    if (!userAccountInfo) {
      return
    }

    getUserReposList()
  }, [userAccountInfo])

  return (
    <main>
      <Head title={error ? null : username} />

      <Search
        changeUserInputText={changeUserInputText}
        submitUsername={submitUsername}
        username={usernameInputText}
        rateLimit={rateLimit}
      />

      {error ? (
        <ErrorMessage error={error} />
      ) : (
        <>
          {userAccountInfo && <UserData userAccountInfo={userAccountInfo} /> }

          {userReposList && (
            <Repos
              userReposList={userReposList}
              username={username}
            />
          )}
        </>
      )}

      <Footer />
    </main>
  )
}
