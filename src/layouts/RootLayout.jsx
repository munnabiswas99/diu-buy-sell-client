import React from 'react';
import Home from '../pages/home/Home';
import Navbar from '../components/navbar/Navbar';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
        </div>
    );
};

export default RootLayout;