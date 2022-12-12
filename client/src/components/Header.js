import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  let navigate = useNavigate()

  return (
    <header className="nav">
      <nav>
        <ul className="nav_links">
          <li>
            <Link to="/BlogFeed">Home</Link>
          </li>

          <li>
            <Link to="/ProfilePage">Profile</Link>
          </li>

          <li>
            <Link to="/ComicGenres">Comics by Genre</Link>
          </li>

          <li>
            <Link to="/CreatePost">Make a blog post</Link>
          </li>

          <li>
            <Link to="/logout">Logout</Link>
          </li>

          <li>
            <p className="navbar-p" onClick={() => navigate(-1)}>
              Back
            </p>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
