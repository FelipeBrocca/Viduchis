import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'


import AddProduct from './AddProduct';


function AddCard() {

  const [trigger, setTrigger] = useState(false)



  return (
    <div className="col-5 m-1 cardItem">
    <div className='border rounded card-product add-product'>
      <button className='button-icon' onClick={() => setTrigger(true)}><FontAwesomeIcon className='icon-plus' icon={faPlusCircle} /></button>
    </div>
    <div className={trigger ? 'pop-up-open' : 'd-none'}>
         <div className='backdrop' onClick={()=> setTrigger(false)}>
          </div>
      <AddProduct />
      <button className='cancel-create' onClick={()=> setTrigger(false)}>X</button>
      </div>
    </div>
  );
}

export default AddCard;