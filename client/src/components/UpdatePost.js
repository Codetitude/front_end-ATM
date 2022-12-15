import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Client from '../services/api'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../services/api'

const UpdatePost = ({ user }) => {
  let navigate = useNavigate()
  let { id } = useParams()

  const initialState = {
    userId: user.id,
    title: '',
    image: '',
    description: '',
    link: ''
  }
  const [formState, setFormState] = useState(initialState)

  const getBlogPostsById = async () => {
    let response = await Client.get(`${BASE_URL}/blog_post/${id}`)
    console.log(response.data)
    setFormState(response.data)
  }

  useEffect(() => {
    getBlogPostsById()
  }, [])

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const postUpdated = {
      ...formState
    }

    let response = await Client.put(
      `${BASE_URL}/blog_post/update/${id}`,
      postUpdated
    )
    setFormState(initialState)
    console.log(response)
    navigate('/BlogFeed')
  }

  return (
    <div>
      <Header />
      <h1 className="landingPageSubtitle">New blog post </h1>
      <form className="makepost" onSubmit={handleSubmit}>
        <label htmlFor="image">Title :</label>
        <input
          className="form-box"
          onChange={handleChange}
          type="text"
          id="title"
          value={formState.title}
        />

        <label htmlFor="image">Image (url):</label>
        <input
          className="form-box"
          onChange={handleChange}
          type="text"
          id="image"
          value={formState.image}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          className="textarea"
          onChange={handleChange}
          value={formState.description}
          id="description"
          cols="50"
          rows="10"
        ></textarea>
        <label htmlFor="link">Link (url):</label>
        <input
          className="form-box"
          onChange={handleChange}
          type="text"
          id="link"
          value={formState.link}
        />
        <br />
        <br />

        <button className="post-review" type="submit">
          update your post
        </button>
      </form>
    </div>
  )
}

export default UpdatePost
