import React from 'react';
import Logo from '../assets/logo.png';

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <nav>
                    <img src={Logo} alt="Logo" />
                    {/* Other Navbar items here */}
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <img src={Logo} alt="Logo" />
                {/* Other Footer items here */}
            </footer>
        </div>
    );
};

export default Layout;