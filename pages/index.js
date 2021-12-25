import { UserData, Search, Repos } from '../components'

export default function Home() {
  return (
    <main>
      <Search />
      <UserData />
      <Repos />
    </main>
  )
}
