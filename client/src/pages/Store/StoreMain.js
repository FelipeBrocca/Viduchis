import React, { useEffect } from "react";
import{useProducts} from '../../context/ProductsContext'
import { useParams } from 'react-router-dom';


import CardItem from '../../components/Products/Card'
import ListCategories from "../../components/Products/ListCategories";
import AddCard from "../../components/Products/AddCard";
import { useUsers } from "../../context/UsersContext";



function StoreMain() {
 
    const params = useParams();
    const {products, getProducts} = useProducts();
    // const {checkUserLogged, userSessed} = useUsers();

    // checkUserLogged('pipebrocca@gmail.com');
    

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <div className="store-main">
                <ListCategories />
                <div className="conteiner d-flex flex-wrap conteiner-store">
                    {/* {
                        userSessed ? 
                        <AddCard />
                        : ''
                    } */}
                   {
                   params && params.category ? products?.map((product) => {
                    
                    let category = product.category.toLowerCase()

                    if(category === params.category){
                        return (
                            <CardItem 
                                nombre={product.name}
                                image={product.image}
                                precio={product.price}
                                stock={product.stock}
                                description={product.description}
                                id={product._id}
                                key={product._id}
                            />
                        ) 
                    } 
                   }) : 
                    products?.map((product) => {                    
                      return  (
                        <CardItem
                            nombre={product.name}
                            image={product.image}
                            precio={product.price}
                            stock={product.stock}
                            description={product.description}
                            id={product._id}
                            key={product._id}
                        />
                    )
                    })
                   }
                </div>
            </div>
        </>
    )
}

export default StoreMain;

