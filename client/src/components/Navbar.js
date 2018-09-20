import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';
// import { BrowserRouter as Router, Route  } from 'react-router-dom';
// import routes from '../routes'
// import {CardPortfolio} from './Card'


export class NavbarFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    
    render() {
        return (
            // <Router>
                <Navbar color="black" dark expand="sm" sticky="top">
                    <NavbarBrand href="/" >
                        <strong>Ryan Drachenberg</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } right />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right>
                                <NavItem active>
                                    <NavLink className="nav-link" to="/">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact-me">Contact Me</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/api-render">API</NavLink>
                                </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            // </Router> 
        );
    }
}