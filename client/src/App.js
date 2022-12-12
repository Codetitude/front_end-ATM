import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import ProfilePage from './pages/ProfilePage'
import BlogFeed from './pages/BlogFeed'
import ComicGenres from './pages/ComicGenres'
import ComicTitles from './pages/ComicTitles'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/BlogFeed" element={<BlogFeed />} />
          <Route path="/ComicGenres" element={<ComicGenres />} />
          <Route path="/ComicTitles" element={<ComicTitles />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
