import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Context = () => {

  const {user,setUser} = useContext(UserContext)

   const j = () =>{
    setUser((prevUser) => (prevUser === 'logged in' ? 'logged out' : 'logged in'))
   }
  return (
    <>
    <h1>{user}</h1>
      < button onClick={j}>{user}</button>
     
    </>
  )

}

export default Context
