import React, {useState} from 'react';
import AddCategory from './AddCategory'


function AddList() {

    const [catTrigger, setCatTrigger] = useState(false)

  return (
        <div className='item-category-link add-list'>
            <div className="item-category add-list" onClick={()=> setCatTrigger(true)}>
                Agregar Categoria
            </div>
            <div className={catTrigger ? 'pop-up-open' : 'd-none'}>
          <AddCategory />
          <button className='cancel-create' onClick={()=> setCatTrigger(false)}>X</button>
            </div>   
        </div>
  );
}

export default AddList;