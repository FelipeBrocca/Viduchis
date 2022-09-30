import axios from 'axios';


export const getProductsRequests = async () => await axios.get('/products')

export const createProductsRequests = async (product) => await axios.post('/products', product)