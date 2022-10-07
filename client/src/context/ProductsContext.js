import { useState, createContext, useContext, useEffect } from "react";
import { getProductsRequests, 
         createProductsRequests, 
         editProductRequest,
         eliminateProductRequest } from "../api/productsAPI";


const productsContext = createContext()

export const useProducts = () => {
    const context = useContext(productsContext);
    return context;
}

export const ProductsProvider = ({children}) => {
    
         const [products, setProducts] = useState([])

         const getProducts = async () => {
          const res = await getProductsRequests()
          setProducts(res.data)
         }

         const createProduct = async (product) => {
          const create = await createProductsRequests(product)
          if(create){
            alert('Producto creado')
            setProducts([...products, create.data])
          } else {
            alert('Error')
          }
         }

         const getEditProduct = async (id) => {
          const productToEdit = await editProductRequest(id)
          return productToEdit.data;
         }

         const eliminateProduct = async (id) => {
          await eliminateProductRequest(id)
          setProducts(products.filter(product => product._id !== id))
         }

         useEffect(() => {
          getProducts()
        }, [])


      return (
        <productsContext.Provider value={{
          products, 
          setProducts,
          getProducts,
          createProduct,
          getEditProduct,
          eliminateProduct
        }} >
          {children}
      </productsContext.Provider>
      )
}
