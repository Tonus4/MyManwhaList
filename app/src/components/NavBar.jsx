import '../stylesheets/navBar.scss'

function NavBar() {

  return (
    <nav className='navBar'>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">My List</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Settings</a></li>
        </ul>
    </nav>
  )
}

export default NavBar
