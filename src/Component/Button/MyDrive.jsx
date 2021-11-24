import React from 'react';
import { FaHdd } from "react-icons/fa";
import {
    Link
} from "react-router-dom";


const MyDrive = ({ link }) => {
    return (
        <div>
            <Link to={link}>
                <div className="my-10 flex hover:text-secondarydark text-secondary">
                    <FaHdd size={40} /><p className="mx-4 font-bold text-xl text-black">My drive</p>
                </div>
            </Link>
        </div>
    )
}
export default MyDrive