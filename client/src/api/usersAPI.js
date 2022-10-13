import axios from 'axios';

export const getUsersRequests = async () => await axios.get('/users')

export const createUserRequest = async (user) => await axios.post('/users', user)

export const profileUserRequest = async (id) => await axios.get(`/users/${id}`)


