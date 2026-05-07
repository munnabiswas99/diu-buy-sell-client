import React from 'react';
import logoImg from "../../assets/logo1.png";

const Logo = () => {
    return (
        <div className='w-40'>
            <img className='rounded-sm' src={logoImg} alt="" />
        </div>
    );
};

export default Logo;