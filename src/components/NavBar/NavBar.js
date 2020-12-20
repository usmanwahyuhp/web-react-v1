import React from 'react';
import { Nav, NavbarContainer, NavIcon, NavLogo  } from './NavBar.elements';

const NavBar = () => {
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon/>
                        USMAN
                    </NavLogo>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default NavBar
