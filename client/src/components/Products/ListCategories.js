import React from 'react';
import { useCategories } from '../../context/CategoriesContext';


import Category from './Category';
import AddButton from './AddButton';





 function ListCategories () {

  const {categories} = useCategories();
  

  return (
    <div className='list-categories'>

        <AddButton
          nombre='+ PRODUCTO'
          param='/crear-producto'
        />

      <form action="#" className='searchbar'>
        <input type="text"
          placeholder="¿Qué estás buscando?"
          name="search"
          autoComplete='off' />
      </form>
      <ul className='list-categories'>
        {
           categories?.map((category) => (
            <Category
            nombre={category.name}
            key={category.name} />
           ))
        }
          <AddButton
          nombre='+ CATEGORIA'
          param='/crear-categoria' />
      </ul>
    </div>
  );
}

export default ListCategories;