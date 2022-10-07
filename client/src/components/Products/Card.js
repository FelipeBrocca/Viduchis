import React, {useState} from 'react';
import { Link } from 'react-router-dom';


// import PopupCard from '../Products/PopupCard'


function CardItem({nombre, image, precio, stock, description, id}) {

  const [trigger, setTrigger] = useState(false)
  
 
  const [valor, setValor] = useState(0)


  return (
    <div className="col-5 m-1 cardItem">
    <div className='border rounded bg-white card-product'>
      <div className="p-3 position-relative image-container"  onClick={() => setTrigger(true)}>
        <img className='col-12' src={image.url} alt='' />
        {
        stock && stock <= 10 ? 
        <span className='etiqueta-stock'>Quedan {stock} productos!</span> 
        : ''
        }
      </div>
      <div className='text-dark p-3 border-top'>
        <h4 className='mt-3'>{nombre}</h4>
        <p style={{fontWeight: '600'}}>${precio}</p>
        <div className="botones-cantidad">
        <button className="boton-cantidad" onClick={()=> valor > 0 ? setValor(valor - 1) : valor}>-</button>
        <span value={valor} className='input-cantidad'>{valor}</span>
        <button className="boton-cantidad" onClick={()=> setValor(valor + 1)}>+</button>
        </div>
        <button className='border-0 rounded boton-card'>Agregar al carrito</button>
      </div>
    </div>
    <div className={trigger ? 'pop-up-open' : 'd-none'}>
         <div className='backdrop' onClick={()=> setTrigger(false)}>
        </div>
      <div className='pop-up-card'>
      <div className="popup-image">
        <img className='col-12' src={image.url} alt='' />
      </div>
      <div className='popup-description'>
        <h3>{nombre}</h3>
        <span>{description}</span>
        <div className='buttons-pop'>
        <Link to={`/productos/detalle/${id}`}><button className='boton-edit'>Editar</button></Link>
        <button className='boton-popup' onClick={() => setTrigger(false)}>Cerrar</button>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default CardItem;
