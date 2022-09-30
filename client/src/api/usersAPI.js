import axios from 'axios';

export const getUsersRequests = async () => await axios.get('/users')


