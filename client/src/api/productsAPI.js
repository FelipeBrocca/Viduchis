import axios from 'axios';


export const getProductsRequests = async () => await axios.get('/products')

export const createProductsRequests = async (product) => {
    const form = new FormData() 

    for(let key in product){
       form.append(key, product[key]) 
    }

    return await axios.post('/products', product, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}