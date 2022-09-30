import React, {  useState } from "react";
import { Link } from "react-router-dom";
import imagenLogo from "../../assets/images/logo-principal-prueba.jpeg"; 
import useScroll from "../../hooks/useScroll";



function TopHeader(){

    const [userList, setUserList] = useState(false)
    const { scrollState } = useScroll();



    return (
    <div className={!scrollState ? 'top-header' : 'top-headerScroll'}>
        <div className={!scrollState ? 'top-header-phrase' : 'disabled'}>
            <p className="frase-no-gusto">Dale. Date. Dénse.</p><p className="frase-gusto">...un gusto.</p>
        </div>
        <Link to="/" className={!scrollState ? 'top-header-logo' : 'top-header-logoScroll'}>
            <img src={imagenLogo} alt="" className={!scrollState ? 'top-header-logo' : 'top-header-logoScroll'} />
        </Link>
        <div className={!scrollState ? 'top-header-loginUser' : 'disabled'}>
            <ul className={userList ? 'user-list' : "d-none"}>
            <Link to='/registro'><li className="header-ingreso">Registrarse </li></Link>
            <Link to='/login'><li className="header-ingreso">Iniciar Sesión</li></Link>
            </ul>
            <button className="user-button" onClick={() => setUserList(!userList)}>Ingresar</button>
        </div>
        <div className={!scrollState ? 'top-header-loginUserBig' : 'disabled'}>
            <Link to='/registro'><p className="header-ingreso">Registrarse </p></Link>
            <Link to='/login'><p className="header-ingreso">Iniciar Sesión</p></Link>
        </div>
    </div>
    )
}

export default TopHeader


