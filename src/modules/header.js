import React, { Component } from 'react';
import logo from '../logo.jpg';

class Header extends Component {
    render() {
        return (
            <div className="mdc-toolbar">
                <img src={logo} className="logo" alt="logo" />
                <h2>My Size</h2>
            </div>
        );
    }
}

export default Header;
