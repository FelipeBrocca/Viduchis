import React from "react";
import { Routes, Route } from "react-router-dom";


import HomeMain from '../pages/Home/HomeMain'
import StoreMain from '../pages/Store/StoreMain'
import AboutMain from '../pages/About us/AboutMain'
import Contact from '../pages/Contact/Contact'
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import NotFound from '../components/NotFound/NotFound'
import EditProduct from "../pages/EditProduct/EditProduct";
import '../assets/css/Main.css'



function MainRoutes (){
      return (
           <main>
               <Routes>
                  <Route exact path="/" element={<HomeMain />} />
                  <Route exact path="/productos" element={<StoreMain />} />
                  <Route exact path="/acerca-de" element={<AboutMain />} />
                  <Route exact path="/contacto" element={<Contact />} />
                  <Route exact path="/registro" element={<Register/>} />
                  <Route exact path="/login" element={<Login/>} />
                  {/* <Route exact path="/productos/:id" element = {<EditProduct />} /> */}
                  <Route path="*" element={<NotFound />} /> 
               </Routes>
           </main>
      )
}

export default MainRoutes