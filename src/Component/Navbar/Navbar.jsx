import React from 'react';
import Profil from '../Picture/Avatar';
import Logo from '../Picture/Logo';

const Navbar = () => {
    return (
        <div className="z-40 w-full">
            <div className="flex bg-secondary justify-between shadow-md items-center px-10">
                <div className="flex items-center">
                    <Logo />
                    <p className="font-semibold text-4xl text-white">Storage</p>
                </div>
                <div className="flex items-center">
                    <Profil />
                </div>
            </div>
        </div>
    )
}
export default Navbar