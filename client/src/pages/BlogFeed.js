import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

const BlogFeed = () => {
  let navigate = useNavigate()

  return (
    <div>
      <Header />
    </div>
  )
}

export default BlogFeed
