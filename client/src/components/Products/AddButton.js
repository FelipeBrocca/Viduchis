import React from 'react';
import {Link} from 'react-router-dom'


function AddButton({nombre, param}) {


  return (
            <Link className="item-add-link" to={param}>
            <li className="item-add">
            <span>{nombre}</span>
            </li>   
            </Link>
  );
}

export default AddButton;