import { useEffect, useState } from 'react'
import { UserData, Search, Repos, Footer, Head } from '../components'
import { MAX_REPOS_ITEMS } from '../components/settings'

export default function Home() {
  const username = 'ryuuto829'
  const [userAccountInfo, setUserAccountInfo] = useState(null)
  const [userReposList, setUserReposList] = useState(null)

  const getUserData = async () => {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const result = await response.json()

    await setUserAccountInfo(result)
  }

  const getUserReposList = async () => {
    const response = await fetch(
      `https://api.github.com/users/${username}\
      /repos?per_page=${MAX_REPOS_ITEMS}&sort=pushed`,
    )

    const result = await response.json()

    await setUserReposList(result)
  }

  useEffect(() => {
    getUserData()
    getUserReposList()
  }, [])

  return (
    <main>
      <Head title={username} />

      <Search />

      {userAccountInfo && <UserData userAccountInfo={userAccountInfo} /> }

      {userReposList && <Repos userReposList={userReposList} />}

      <Footer />
    </main>
  )
}
