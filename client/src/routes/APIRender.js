import React from 'react'
import '../App.css';
import { FooterPage } from '../components/Footer';
import { NavbarFeatures } from '../components/Navbar';
import { DisplayAPI } from '../components/DisplayAPI';


export default () => (
    <div>
        <NavbarFeatures />
        < DisplayAPI />
        
        < FooterPage /> 
    </div>
);
