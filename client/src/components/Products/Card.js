import React, {useState} from 'react'


function CardItem({nombre, image, precio, stock, setTrigger}) {

   const [valor, setValor] = useState(0)


  return (
    <div className='border pt-3 rounded bg-white card-product' onClick={() => setTrigger(true)}>
      <div className="p-3 position-relative"><img className='col-12' src={image} alt='' /><span className='etiqueta-stock'>Quedan 10 productos!</span></div>
      <div className='text-dark p-3 border-top'>
        <h4 className='mt-3'>{nombre}</h4>
        <p style={{fontWeight: '600'}}>${precio}</p>
        <p>{stock}</p>
        <div className="botones-cantidad">
        <button className="boton-cantidad" onClick={()=> valor > 0 ? setValor(valor - 1) : valor}>-</button>
        <span value={valor} className='input-cantidad'>{valor}</span>
        <button className="boton-cantidad" onClick={()=> setValor(valor + 1)}>+</button>
        </div>
        <button className='border-0 rounded boton-card'>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default CardItem;
