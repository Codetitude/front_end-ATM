import Header from '../components/Header'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Client from '../services/api'
import { BASE_URL } from '../services/api'
// import axios from 'axios'

const ComicList = ({ user }) => {
  let navigate = useNavigate()
  const [comics, setComics] = useState([])
  // let apiKey = process.env.REACT_APP_COMIC_VINE_KEY
  // REACT_APP_COMIC_VINE_KEY= 8a633e651053d0f1caebc7e7d04e59b14c6166e4
  // `http://beta.comicvine.com/api/issues/?api_key=${process.env.REACT_APP_COMIC_VINE_KEY}`

  const getComics = async () => {
    const response = await Client.get(`${BASE_URL}/comic_list/`)
    setComics(response.data)
    console.log(response)
  }

  useEffect(() => {
    getComics()
  }, [])

  return user ? (
    <div>
      <Header />
      <div className="">
        <h1 className="landingPageSubtitle">Comic List</h1>
        <div className="">
          {comics.map((comic) => (
            <div key={comic.id}>
              <div className="restaurant-card">
                <h2>{comic.title}</h2>
                <img
                  className="restaurant-list-image"
                  src={comic.image}
                  alt={comic.title}
                />
                <img src={comic.publisher} alt=""></img>
                <h3>{comic.link}</h3>
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
