import React from "react";
import { Link } from "react-router-dom";
import useScroll from "../../hooks/useScroll"


function NavHeader() {

   const { scrollState } = useScroll();


   return(
        <>
              <nav className={!scrollState ? "div-nav-header" : 'disabled'}>
                  <ul className="ul-nav-header">
                        <Link to="/productos" className="li-nav-header">
                        <li className="li-nav-header">
                        <button className="button-nav-header">Tienda</button>
                        </li>
                        </Link>
                        <Link className="li-nav-header" to="/acerca-de">
                           <li className="li-nav-header">
                           <button className="button-nav-header">¿Quiénes somos?</button>
                           </li>
                        </Link>
                        <Link className="li-nav-header" to="/contacto">
                        <li className="li-nav-header">
                        <button className="button-nav-header">Contacto</button>
                        </li>
                        </Link>
                  </ul>
              </nav>
        </>
   )
}

export default NavHeader
                        