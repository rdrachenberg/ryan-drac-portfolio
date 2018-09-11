import React from 'react'
import '../App.css';
import { CardPortfolio } from '../components/Card';
import { FooterPage } from '../components/Footer';
import { NavbarFeatures } from '../components/Navbar';

export default () => (
    <div>
        <NavbarFeatures />
        <CardPortfolio />
        < FooterPage />
    </div>
);