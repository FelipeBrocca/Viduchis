import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { useCategories } from '../../context/CategoriesContext';


function Category({nombre, param, id}) {

  const navigate = useNavigate()
  const {eliminateCategory} = useCategories();

  const [eliminate, setEliminate] = useState(false)


  const handleDelete = async (id) => {
    setEliminate(false)
    navigate('/productos')
    await eliminateCategory(id)
  }

  return (
    <div className='category-container'>
            <Link className="item-category-link" to={`/productos/${param.toLowerCase()}`}>
            <li className="item-category">
            {nombre.charAt(0).toUpperCase() + nombre.slice(1)}
            </li>   
            </Link>
            <div>
              <span className='eliminate-category' onClick={() => setEliminate(true)}>X</span>
            </div>
            <div className={eliminate ? 'pop-up-open' : 'd-none'}>
        <div className='backdrop' onClick={() => setEliminate(false)}>
        </div>
        <div className='pop-up-eliminate'>
          <p>Estas seguro que quieres eliminar esta categoria?</p>
          <div className='confirm-eliminate'>
          <button className='cancel' onClick={()=> setEliminate(false)}>Cancelar</button>
          <button className='eliminate' onClick={() => {handleDelete(id)}}>Eliminar</button>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Category;