import React from 'react';
import FormSearchFile from '../Form/FormSearchFile';
import Profil from '../Picture/Avatar';
import Logo from '../Picture/Logo';

const NavbarUser = () => {
    return (
        <div className="z-40 w-full">
            <div className="flex justify-between bg-white border-b-2 border-black items-center px-10">
                <div className="flex items-center">
                    <Logo />
                    <p className="font-semibold text-4xl">Storage</p>
                </div>
                <div className="flex items-center">
                    <FormSearchFile />
                    <Profil />
                </div>
            </div>
        </div>
    )
}
export default NavbarUser