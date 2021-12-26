import { UserData, Search, Repos, Footer, Head } from '../components'

export default function Home() {
  return (
    <main>
      <Head />
      <Search />
      <UserData />
      <Repos />
      <Footer />
    </main>
  )
}
