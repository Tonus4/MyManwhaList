import '../stylesheets/global.scss'
import NavBar from './NavBar.jsx'

function Home() {

  return (
    <>
      <header>
        <div>
          <h1>My Manwha List</h1>
        </div>
      </header>
      <NavBar />
      <main>
        <div id='main'>
        </div>
        <div id='pannel'>
        </div>
      </main>
      <footer>
      </footer>
    </>
  )
}

export default Home
