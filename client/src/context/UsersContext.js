import { useState, createContext, useContext, useEffect } from "react";
import bcryptjs from 'bcryptjs'
import { getUsersRequests,
         createUserRequest,
         profileUserRequest
} from "../api/usersAPI";


const UsersContext = createContext()

export const useUsers = () => {
  const context = useContext(UsersContext);
  return context;
}

export const UsersProvider = ({ children }) => {

  const [users, setUsers] = useState([])
  // const [userSessed, setUserSessed] = useState(false)

  const getUsers = async () => {
    const res = await getUsersRequests()
    setUsers(res.data)
  }

  const createUser = async (user) => {
    const register = await createUserRequest(user)
    if(register){
      alert('Usuario creado')
      setUsers([...users, register.data])
    } else {
      alert('Error')
    }
  } 

  const getProfile = async (id) => {
    const userProfile = await profileUserRequest(id)
    return userProfile.data;
  }

  // const checkUserLogged = async (admin) => {
  //  const userInSession = await window.sessionStorage.getItem('us')
   
  //  if (userInSession) {
  //   const isAdmin = await bcryptjs.compare(admin, userInSession)
  //   console.log(userInSession);
  //   console.log(userSessed);
  //   console.log(isAdmin);
  // }
  // if (userInSession && isAdmin) {
  //   setUserSessed(true)
  // }
  // } 
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <UsersContext.Provider value={{
      users,
      getUsers,
      createUser,
      getProfile,
      // checkUserLogged
    }} >
      {children}
    </UsersContext.Provider>
  )
}
