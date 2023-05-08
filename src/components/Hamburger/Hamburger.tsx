import React, { FC, useState } from 'react';
import './Hamburger.scss'
import { UserInfo } from '../UserInfo/UserInfo';

interface IHamburger {
    
}

export const Hamburger: FC<IHamburger> = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="burger-menu">
            <button onClick={toggleMenu}>
                <div className={`burger-menu__icon ${isOpen ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <ul className={`burger-menu__items ${isOpen ? 'open' : ''}`}>
                <UserInfo username={'Dmitry Podolnitski'} />
                
            </ul>
        </div>
    );
}

