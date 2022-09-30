import React from 'react';



function PopupCard({name, image, description, trigger, setTrigger}) {


  return (
    <div className={trigger ? 'pop-up-open' : 'pop-up'}>
      <div className="popup-image">
        <img className='col-12' src={image} alt='' />
      </div>
      <div className='popup-description'>
        <h3>{name}</h3>
        <span>{description}</span>
        <button className='boton-popup' onClick={() => setTrigger(false)}>Cerrar</button>
      </div>
    </div>
 );

}

export default PopupCard;