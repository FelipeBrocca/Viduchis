import { useState, createContext, useContext, useEffect } from "react";
import { getUsersRequests } from "../api/usersAPI";


const usersContext = createContext()

export const useUsers = () => {
  const context = useContext(usersContext);
  return context;
}

export const UsersProvider = ({ children }) => {

  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const res = await getUsersRequests()
    setUsers(res.data)
  }
  useEffect(() => {
    getUsers()
  }, [])

  return (
    <usersContext.Provider value={{
      users,
      getUsers
    }} >
      {children}
    </usersContext.Provider>
  )
}
