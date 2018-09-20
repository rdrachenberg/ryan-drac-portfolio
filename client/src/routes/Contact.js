import React from 'react'
import '../App.css';
import { NavbarFeatures } from '../components/Navbar';
import { FormsPage }  from '../components/Contact';
import { FooterPage } from '../components/Footer';

export default () => (
    <div>
        < NavbarFeatures />
        < FormsPage />
        < FooterPage />
    </div>

);