import React from 'react';
import {Link} from 'react-router-dom'


function Category({nombre, param}) {


  return (
            <Link className="item-category-link" to={`/productos/${param.toLowerCase()}`}>
            <li className="item-category">
            {nombre.charAt(0).toUpperCase() + nombre.slice(1)}
            </li>   
            </Link>
  );
}

export default Category;