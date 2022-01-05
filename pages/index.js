import { useEffect, useState } from 'react'
import { UserData, Search, Repos, Footer, Head } from '../components'

export default function Home() {
  const username = 'ryuuto829'
  const [userAccountInfo, setUserAccountInfo] = useState(null)

  const getUserData = async () => {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const result = await response.json()

    await setUserAccountInfo(result)
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <main>
      <Head title={username} />
      <Search />
      {userAccountInfo && <UserData userAccountInfo={userAccountInfo} /> }
      <Repos />
      <Footer />
    </main>
  )
}
