import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Footer from './Footer';
import Animation from './Animation';
import LanguageSwitcher from './LanguageSwitcher';
import logoImg from '../assets/FNF-LOGO-White.png';

const Layout = () => {
    return (
        <Router>
            <div className="layout">
                <Navbar />
                <MobileMenu />
                <Animation />
                <div className="content">
                    <Switch>
                        <Route path="/" exact> {/* main route handling */} </Route>
                        {/* Add other routes as needed */}
                    </Switch>
                </div>
                <img src={logoImg} alt="FNF Logo" />
                <LanguageSwitcher />
                <Footer />
            </div>
        </Router>
    );
};

export default Layout;
