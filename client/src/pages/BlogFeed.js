import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Client from '../services/api'
import { BASE_URL } from '../services/api'
import CreatePost from '../components/CreatePost'

const BlogFeed = ({ user }) => {
  let navigate = useNavigate()
  const [blogPosts, setBlogPosts] = useState()

  const getBlogPosts = async () => {
    const res = await Client.get(`${BASE_URL}/blog_posts/`)
    setBlogPosts(res.data)
    console.log(res)
  }

  useEffect(() => {
    getBlogPosts()
  }, [])

  return user ? (
    <div>
      <Header />
      <h1 className="landingPageSubtitle">The World of Independent Comics</h1>
      <div className="reviews">
        {blogPosts?.reverse().map((blogPost) => (
          <div key={blogPost.id} className="review-wrapper">
            <div className="info">
              <div className="user">
                <h4 className="username">@{blogPost.userId.username}</h4>
              </div>
            </div>
            <img className="review-img" src={blogPost.image} alt=""></img>
            <div className="review-content">
              <h4 className="dish">{blogPost.title}</h4>
              <p className="description">{blogPost.description}</p>
              <p className="rating">{blogPost.link}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      <button onClick={() => navigate('/')}>Sign In</button>
    </div>
  )
}

export default BlogFeed
