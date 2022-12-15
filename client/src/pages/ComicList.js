import Header from '../components/Header'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Client from '../services/api'
import { BASE_URL } from '../services/api'

const ComicList = ({ user }) => {
  let navigate = useNavigate()
  const [comics, setComics] = useState([])

  const getComics = async () => {
    const response = await Client.get(`${BASE_URL}/comic_list/`)
    setComics(response.data)
    console.log(response)
  }

  useEffect(() => {
    getComics()
  }, [])

  return user ? (
    <div className="comiclist">
      <Header />
      <div className="comiclist">
        <h1 className="landingPageSubtitle">Comic List</h1>
        <div className="comiclist">
          {comics.map((comic) => (
            <div key={comic.id}>
              <div className="comic-card">
                <h1 className="comictitle">{comic.title}</h1>
                <img
                  className="comiclist-image"
                  src={comic.image}
                  alt={comic.title}
                />
                <div className="comiclistdetails">
                  <label className="comiclistlabel">Publisher :</label>
                  <p> {comic.publisher} </p>
                  <br />
                  <label className="comiclistlabel">Genre :</label>
                  <p>{comic.genre}</p>

                  <button className="signup-button"> add to list</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/')}>Sign In</button>
    </div>
  )
}

export default ComicList
