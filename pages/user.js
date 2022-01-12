import { useEffect, useState } from 'react'
import {
  UserData,
  Search,
  Repos,
  Footer,
  Head,
  ErrorMessage,
  Charts,
  Loading,
} from '../components'
import { useUserSearch } from '../hooks'

import settings from '../components/settings'

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
  const [reposCommits, setReposCommits] = useState([])
  const [loading, setLoading] = useState(false)

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
        /repos?per_page=${settings.maxReposItems}&sort=pushed`,
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

  const getReposCommits = async () => {
    try {
      const reposNames = await userReposList
        .slice(0, settings.maxLatestRepos)
        .map(repo => repo.name)

      const commitsData = {}

      for (const name of reposNames) {
        const response = await fetch(
          `https://api.github.com/repos/${username}/${name}/contributors`,
        )
        const result = await response.json()

        const commitsSumCount = result
          .reduce((a, b) => a + b.contributions, 0)

        commitsData[name] = commitsSumCount
      }

      const commitsDataArray = Object.entries(commitsData)
      const sortedCommitsDataArray = commitsDataArray
        .sort((a, b) => b[1] - a[1])

      await setReposCommits(sortedCommitsDataArray)
      await setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(400)
    }
  }

  useEffect(() => {
    if (!username) {
      return
    }

    setUserReposList(null)
    setReposCommits([])
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

  useEffect(() => {
    // Wait for the repos list results
    if (!userReposList) {
      return
    }

    setLoading(true)
    getReposCommits()
  }, [userReposList])

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

          {/* User profile summary section */}
          {userAccountInfo ? (
            <UserData userAccountInfo={userAccountInfo} />
          ) : (
            <Loading message="User profile info is loading" />
          )  }

          {/* User graphical summary section */}
          {userReposList
          && userReposList.length !== 0
          && reposCommits.length !== 0 ? (
              <Charts
                userReposList={userReposList}
                reposCommits={reposCommits}
              />
            ) : (
              <>
                {loading && (
                  <Loading message="User graphical summary is loading" />
                )}
              </>
            )}

          {/* User repos list summary */}
          {userReposList ? (
            <Repos
              userReposList={userReposList}
              username={username}
            />
          ) : (
            <Loading message="User repos list is loading" />
          )}
        </>
      )}

      <Footer />
    </main>
  )
}
