import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import {
    Link
} from "react-router-dom";


const Trash = ({ link }) => {
    return (
        <div>
            <Link to={link}>
                <div className="my-10 flex hover:text-secondarydark text-secondary">
                    <FaTrashAlt size={40} /><p className="mx-4 font-bold text-xl text-black">Trash</p>
                </div>
            </Link>
        </div >
    )
}
export default Trash