import axios from "axios";

export const getCategoriesRequests = async () => await axios.get('/categories')

export const createCategoriesRequests = async (category) => await axios.post('/categories', category)