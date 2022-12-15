import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/Auth'

const LandingPage = ({ setUser }) => {
  const navigate = useNavigate()

  const initialState = {
    username: '',
    email: '',
    password: ''
  }
  const [signInState, setSignInState] = useState(initialState)

  const [login, setLogin] = useState(false)

  const handleChange = (e) => {
    setSignInState({ ...signInState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await SignInUser({
      username: signInState.username,
      email: signInState.email,
      password: signInState.password
    })
    const payload = await SignInUser(signInState)
    setUser(payload)

    setSignInState(initialState)
    navigate('/BlogFeed')
  }

  return (
    <div className="landingpage">
      <h1 className="landingPageTitle">ATM </h1>

      <h2 className="landingPageSubtitle"> Your source for all things media</h2>
      <br />
      <br />
      <br />
      <br />

      <form className="signinform" onSubmit={handleSubmit}>
        <label className="login" htmlFor="username">
          Username:
        </label>
        <input
          required
          className="form-box"
          id="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
          value={signInState.username}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          required
          className="form-box"
          id="email"
          type="text"
          placeholder="Email"
          onChange={handleChange}
          value={signInState.email}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          required
          className="form-box"
          id="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={signInState.password}
        />
        <br />

        <button
          className="login-button"
          disabled={!signInState.email || !signInState.password}
          type="submit"
          onClick={() => setLogin(true)}
        >
          Sign in!
        </button>
        <p>Don't have an account?</p>
        <button className="login-button" onClick={() => navigate('/signup')}>
          Sign up
        </button>
      </form>
    </div>
  )
}

export default LandingPage
