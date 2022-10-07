import React from 'react';
import { useCategories } from '../../context/CategoriesContext';
import AddList from './AddList';


import Category from './Category';




 function ListCategories () {

  const {categories} = useCategories();
  const allProducts = 'Todos los productos';
  

  return (
    <div className='list-categories'>

      <form action="#" className='searchbar'>
        <input type="text"
          placeholder="¿Qué estás buscando?"
          name="search"
          autoComplete='off' />
      </form>
        <Category 
        nombre={allProducts}
        param=''
        />
      <ul className='list-categories'>
        {
           categories?.map((category) => (
            <Category
            nombre={category.name}
            param={category.name}
            key={category.name} />
           ))
        }
      </ul>
        <AddList />
    </div>
  );
}

export default ListCategories;