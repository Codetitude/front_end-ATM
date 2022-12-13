import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = ({ handleLogOut }) => {
  const navigate = useNavigate()
  useEffect(() => {
    handleLogOut()
    alert('Successfully logged out!')
    navigate('/')
  }, [])

  return <div>Logged Out</div>
}

export default Logout
