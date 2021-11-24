import React from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const NavbarMyDrive = ({ filter, path, back, search }) => {
    return (
        <div className="z-40 w-full">
            <div className="flex justify-between border-b-2 border-black items-center py-2">
                <div className="flex items-center">
                    <select className="bg-white  md:w-20 w-10 md:h-10 h-5 md:text-xl items-center focus:outline-none "
                        onChange={filter}
                    >
                        <option value={0}>All</option>
                        <option value={1}>Folder</option>
                        <option value={2}>File</option>
                    </select>
                    <div className="md:m-2 px-2 py-1 items-center h-8 rounded-lg text-sm">{path}</div>
                </div>
                <div className="flex items-center">
                    <button className="flex bg-secondary hover:bg-secondarydark text-white item-center md:py-2 md:m-2 ml-10 z-20 w-20 md:h-8 h-6 shadow rounded-lg focus:outline-none p-1"
                        onClick={back}
                    >
                        <FaArrowAltCircleLeft />
                        <p className="mx-2 -my-1">back</p>
                    </button>
                    <input className="bg-primary focus:bg-white focus:outline-none placeholder-white w-60 h-10 mx-10 px-5 border-2 border-black rounded-xl" placeholder="search"
                        onChange={search}
                    />
                </div>
            </div>
        </div>
    )
}
export default NavbarMyDrive