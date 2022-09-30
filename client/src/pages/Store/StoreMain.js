import React, {useState} from "react";

import PopupCard from "../../components/Products/PopupCard";
import CardItem from '../../components/Products/Card'
import ListCategories from "../../components/Products/ListCategories";

import alfajores from '../../assets/images/alfajores.jpg'
import bombones from '../../assets/images/bombones.png'
import caramelos from '../../assets/images/caramelos.jpg'
import dulceDeLeche from '../../assets/images/dulce-de-leche.jpg'
import patacones from '../../assets/images/patacones.jpg'

function StoreMain (){

   const [trigger, setTrigger] = useState(false)


    return(
        <>
        <div className="store-main">
        <ListCategories />
    <div className="conteiner d-flex flex-wrap conteiner-store">
    <div className="col-5 m-1 cardItem">
        <CardItem
        setTrigger={setTrigger}
        nombre={'Alfajores'}
        image={alfajores}
        precio={450}
        />
    </div><div className="col-5 m-1 cardItem">
        <CardItem
        setTrigger={setTrigger}
        nombre={'Alfajores'}
        image={alfajores}
        precio={450}
        />
    </div>
    <div className="col-5 m-1 cardItem">
        <CardItem
        setTrigger={setTrigger}
        nombre={'Alfajores'}
        image={alfajores}
        precio={450}
        />
    </div>
    <div className="col-5 m-1 cardItem">
        <CardItem
        setTrigger={setTrigger}
        nombre={'Alfajores'}
        image={alfajores}
        precio={450}
        />
    </div>
    <div className="col-5 m-1 cardItem">
        <CardItem
        setTrigger={setTrigger}
        nombre={'Alfajores'}
        image={alfajores}
        precio={450}
        />
    </div>
    </div>
    </div>
    <PopupCard 
    trigger={trigger}
    setTrigger={setTrigger}
    name="Caramelos"
    image={caramelos}
    description='Hola soy la descripcion de los caramelos espero poder ser mas larga y cada vez soy mucho mas larga para probar como es que voy quedando cuando me van agregando texto y ya no se que escribir ni que tan larga soy'
    />
    </>
    )
}

export default StoreMain;