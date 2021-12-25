import { UserData, Search, Repos, Footer } from '../components'

export default function Home() {
  return (
    <main>
      <Search />
      <UserData />
      <Repos />
      <Footer />
    </main>
  )
}
