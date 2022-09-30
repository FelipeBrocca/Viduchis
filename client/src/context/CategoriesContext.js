import { useState, createContext, useContext, useEffect } from "react";
import { createCategoriesRequests, getCategoriesRequests } from "../api/categoriesAPI";


const categoriesContext = createContext()

export const useCategories = () => {
    const context = useContext(categoriesContext);
    return context;
}

export const CategoriesProvider = ({children}) => {

         const [categories, setCategories] = useState([])

         const getCategories = async () => {
            const res = await getCategoriesRequests()
            setCategories(res.data)
        }

        const createCategory = async (category) => {
            const create = await createCategoriesRequests(category)
            if(create){
                alert('Categoria creada')
                setCategories([...categories, create.data])
            } 
        }

        useEffect(() => {
            getCategories()
        }, [])

      return (
        <categoriesContext.Provider value={{
            categories, 
            setCategories,
            createCategory
        }} >
          {children}
      </categoriesContext.Provider>
      )
}