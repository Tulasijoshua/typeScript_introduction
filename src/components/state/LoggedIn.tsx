import { useState } from "react"

const Practice = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoggedIn = () => {
    setIsLoggedIn(true);
  }

  const handleLoggedout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <button onClick={handleLoggedIn}>Login</button>
      <button onClick={handleLoggedout}>Logout</button>
      <h3>You are {isLoggedIn ? 'logged in' : 'logged out'}</h3>
    </div>
  )
}

export default Practice