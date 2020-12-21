import React, { useState } from 'react';
import { Nav, NavbarContainer, NavIcon, NavLogo, MobileIcon  } from './NavBar.elements';
import { FaTimes, FaBars } from 'react-icons/fa';

const NavBar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon/>
                        USMAN
                    </NavLogo>
                    <MobileIcon>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default NavBar
