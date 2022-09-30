import React from "react"
import TopHeader from './TopHeader'
import NavHeader from "./NavHeader"

import '../../assets/css/Header.css'


function Header (){
      return (

      <header className="header">
           <TopHeader />
           <NavHeader />
      </header>
      
      )
}

export default Header