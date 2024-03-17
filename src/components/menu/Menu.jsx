import React, { useState } from 'react';
import './Menu.css'
import Home from '../pages/Home/Home';
import Sobre from '../pages/Sobre/Sobre'
import Portafolio from '../pages/Portafolio/Portafolio';
import Educacion from '../pages/Educacion/Educacion';
import Contacto from '../pages/Contacto/Contacto';

function Menu() {
    const [currentPage, setCurrentPage] = useState('home');
    const navigateTo = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='menu-content'>
            <nav>
                <div>
                    <div>
                        <button onClick={() => navigateTo('home')}>HOME</button>
                        <button onClick={() => navigateTo('sobre')}>SOBRE MÍ</button>
                        <button onClick={() => navigateTo('portafolio')}>PORTAFOLIO</button>
                        <button onClick={() => navigateTo('educación')}>EDUCACIÓN</button>
                        <button onClick={() => navigateTo('contacto')}>CONTACTO</button>
                    </div>
                </div>
            </nav>
            <div className='show-content-media'>
                {currentPage === 'home' && <Home />}
                {currentPage === 'sobre' && <Sobre />}
                {currentPage === 'portafolio' && <Portafolio />}
                {currentPage === 'educación' && <Educacion />}
                {currentPage === 'contacto' && <Contacto />}
            </div>
        </div>
    );
}

export default Menu;