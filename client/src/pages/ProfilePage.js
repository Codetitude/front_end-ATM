import Header from '../components/Header'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import { BASE_URL } from '../services/api'
import { useNavigate } from 'react-router-dom'

const ProfilePage = ({ user }) => {
  let navigate = useNavigate()
  const [profileName, setProfileName] = useState()
  const [userPicks, setUserPicks] = useState()

  const getUserPicks = async () => {
    let res = await Client.get(`${BASE_URL}/user_pick/${user.id}`)
    console.log(res.user.username)
    setUserPicks(res.data.Picks)
    setProfileName(res.data.username)
  }

  useEffect(() => {
    getUserPicks()
  }, [])

  return (
    <div>
      <Header />

      <div className="profile-info">
        {/* <h1 className="profile-name">{user.username}</h1> */}
      </div>
      <div className="profile-cards">
        {userPicks?.map((userPick) => (
          <div
            id={userPick.userPick_id}
            key={userPick.id}
            className="Pick-card"
          >
            <div className="Pick-info">
              <h2 className="Pick-dish">{userPick.dish}</h2>
              <div className="Pick-image-buttons">
                <img
                  className="Pick-img-profile"
                  alt=""
                  src={userPick.img}
                ></img>
                <p className="description">{userPick.description}</p>
                <p className="rating">{userPick.rating}/10</p>
              </div>
              <div className="edit-buttons">
                <button
                  className="update-button"
                  id={userPick.id}
                  onClick={() => navigate(`/update/Pick/${userPick.id}`)}
                >
                  Update
                </button>
                {/* <button
                  className="delete-button"
                  id={userPick.id}
                  onClick={deletePick}
                >
                  Delete
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProfilePage
