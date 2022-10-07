import React, { useEffect } from "react";
import{useProducts} from '../../context/ProductsContext'
import { useParams } from 'react-router-dom';


import CardItem from '../../components/Products/Card'
import ListCategories from "../../components/Products/ListCategories";
import AddCard from "../../components/Products/AddCard";



function StoreMain() {
 
    const params = useParams();
    const {products, getProducts} = useProducts();


    useEffect(() => {
       getProducts()
    }, [products])

    return (
        <>
            <div className="store-main">
                <ListCategories />
                <div className="conteiner d-flex flex-wrap conteiner-store">
                   {
                   params && params.category ? products?.map((product) => {

                    if(product.category == params.category){
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
                   <AddCard />
                </div>
            </div>
        </>
    )
}

export default StoreMain;

