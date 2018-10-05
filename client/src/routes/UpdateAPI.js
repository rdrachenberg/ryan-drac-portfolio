import React from 'react'
import '../App.css';
import { FooterPage } from '../components/Footer';
import { NavbarFeatures } from '../components/Navbar';
import { UpdateAPI } from '../components/UpdateAPI';


export default () => (
    <div>
        <NavbarFeatures />
        < UpdateAPI />
        < FooterPage /> 
    </div>
);
