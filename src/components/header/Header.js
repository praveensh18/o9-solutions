import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <a href="#" className="logo">
                    o9
                </a>

                <input type="checkbox" id="menu-bar" />
                <label htmlFor="menu-bar" className="fa fa-fw fa-bars"></label>
                <nav className="navbar">
                    <div className="nav-wrapper">
                        <a href="#">Solutions</a>
                        <a href="#">Platform</a>
                        <a href="#">Resources</a>
                        <a href="#">Company</a>
                    </div>

                    <a href="https://o9solutions.com/request-a-demo/" target="_blank" className="more-info-btn header-link">Request a demo</a>
                </nav>
            </header>
        )
    }
}

export default Header;