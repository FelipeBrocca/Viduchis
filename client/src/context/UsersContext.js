import { useState, createContext, useContext, useEffect } from "react";
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


  useEffect(() => {
    getUsers()
  }, [])

  return (
    <UsersContext.Provider value={{
      users,
      getUsers,
      createUser,
      getProfile
    }} >
      {children}
    </UsersContext.Provider>
  )
}
