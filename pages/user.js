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

  const getUserData = async () => {
    const response = await fetch(`https://api.github.com/users/${username}`)

    if (response.status === 404) {
      return setError(404)
    }

    const result = await response.json()

    await setUserAccountInfo(result)
  }

  const getUserReposList = async () => {
    const response = await fetch(
      `https://api.github.com/users/${username}\
      /repos?per_page=${MAX_REPOS_ITEMS}&sort=pushed`,
    )

    if (response.status === 404) {
      return setError(404)
    }

    const result = await response.json()

    await setUserReposList(result)
  }

  useEffect(() => {
    if (!username) {
      return
    }

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
