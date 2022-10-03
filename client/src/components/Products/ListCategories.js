import React from 'react';
import { useCategories } from '../../context/CategoriesContext';
import AddList from './AddList';


import Category from './Category';




 function ListCategories () {

  const {categories} = useCategories();
  

  return (
    <div className='list-categories'>

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
      </ul>
        <AddList />
    </div>
  );
}

export default ListCategories;