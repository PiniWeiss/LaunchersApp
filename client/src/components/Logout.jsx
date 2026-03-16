import React from 'react'
import { useNavigate } from 'react-router'

function LogOut() {
  const navigate = useNavigate();
  function logOut(){
    localStorage.removeItem('jwt')
    navigate('/login')
  }

  return (
    <div>
      <button onClick={logOut}>Log Out</button>
    </div>
  )
}

export default LogOut