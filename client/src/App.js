import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'

import LandingPage from './pages/LandingPage'
import ProfilePage from './pages/ProfilePage'
import BlogFeed from './pages/BlogFeed'
import ComicList from './pages/ComicList'
import CreatePost from './components/CreatePost'
import Logout from './components/Logout'
import SignUp from './components/SignUp'

function App() {
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    setUser(null)

    localStorage.clear()
  }

  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage setUser={setUser} />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/BlogFeed" element={<BlogFeed user={user} />} />
          <Route path="/ComicList" element={<ComicList user={user} />} />
          <Route path="/CreatePost" element={<CreatePost />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route
            path="/LogOut"
            element={<Logout handleLogOut={handleLogOut} setUser={setUser} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
