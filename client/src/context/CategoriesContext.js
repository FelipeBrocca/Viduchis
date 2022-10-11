import { useState, createContext, useContext, useEffect } from "react";
import { createCategoriesRequests, getCategoriesRequests, eliminateCategoryRequest } from "../api/categoriesAPI";


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
            } else {
                alert('Error')
            }
        }

        const eliminateCategory = async (id) => {
            await eliminateCategoryRequest(id)
            setCategories(categories.filter(category => category._id !== id))
        }

        
        useEffect(() => {
            getCategories()
        }, [])

      return (
        <categoriesContext.Provider value={{
            categories, 
            setCategories,
            createCategory,
            eliminateCategory
        }} >
          {children}
      </categoriesContext.Provider>
      )
}