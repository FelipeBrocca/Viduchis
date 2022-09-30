import React from 'react';
import { Link } from 'react-router-dom'



import '../../assets/css/Footer.css'


export default function Footer(){
    return(
   
        <footer>
            <ul className='redes-footer'>
                <Link to='#'><li className='redes'>Instagram</li></Link>
                <Link to='#'><li className='redes'>Facebook</li></Link>
                <Link to='#'><li className='redes'>Twitter</li></Link>
            </ul>
            <div className='text-footer'><p>Copyright @2022 - Design by -</p><p className='designer-mark'>EffeBe</p></div>
        </footer>
   
    )
}