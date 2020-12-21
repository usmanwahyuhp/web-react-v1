import React, { useState } from 'react';
import {
    Nav,
    NavbarContainer,
    NavIcon,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
  } from './NavBar.elements';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const NavBar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon/>
                            USMAN
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/Home'>
                                Home
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/services'>
                                Services
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/products'>
                                Products
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar
