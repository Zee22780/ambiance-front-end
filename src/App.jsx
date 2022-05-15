import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import CreateSpotForm from './pages/CreateSpot/CreateSpotForm'
import SpotCard from './components/Spots/SpotCard'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import * as authService from './services/authService'
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />

      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
        <Route
          path="/addSpot"
          element={user ? <CreateSpotForm /> : <Navigate to="/login" />}
        />
      </Routes>
      <div>
        <Container className="grid-container">
          <Grid container spacing={2}>
            <SpotCard />
            <SpotCard />
            <SpotCard />
            <SpotCard />
            <SpotCard />
            <SpotCard />
          </Grid>
        </Container>
      </div>
      
    </>
  )
}

export default App
