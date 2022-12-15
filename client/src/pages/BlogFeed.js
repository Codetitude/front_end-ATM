import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Client from '../services/api'
import { BASE_URL } from '../services/api'
import CreatePost from '../components/CreatePost'

const BlogFeed = ({ user }) => {
  let navigate = useNavigate()
  let { id } = useParams()

  const [blogPosts, setBlogPosts] = useState()

  const getBlogPosts = async () => {
    const res = await Client.get(`${BASE_URL}/blog_post`)
    setBlogPosts(res.data)
    console.log(res)
  }

  const deleteBlogPosts = async (id) => {
    await Client.delete(`${BASE_URL}/blog_post/delete/${id}`)
    getBlogPosts()
  }

  useEffect(() => {
    getBlogPosts()
  }, [])

  return user ? (
    <div>
      <Header />
      <h1 className="landingPageSubtitle">The World of Independent Comics</h1>
      <br />
      <br />
      <br />
      <div className="blogfeed">
        {blogPosts?.reverse().map((blogPost) => (
          <div key={blogPost.id} className="blog-wrapper">
            <div className="info">
              <div className="user">
                {/* <h4 className="username">@{blogPost.userId.username}</h4> */}
                <h4 className="blogtitle">{blogPost.title}</h4>
              </div>
            </div>
            <img className="review-img" src={blogPost.image} alt=""></img>
            <div className="review-content">
              <p className="description">{blogPost.description}</p>
              <p className="rating">{blogPost.link}</p>
              <button
                className="signup-button"
                onClick={() => navigate(`/UpdatePost/${blogPost.id}`)}
              >
                edit your post{' '}
              </button>
              <button
                className="signup-button"
                onClick={() => deleteBlogPosts(blogPost.id)}
              >
                delete your post
              </button>
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
