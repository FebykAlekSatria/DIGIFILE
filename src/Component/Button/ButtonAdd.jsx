import React from 'react';
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ButtonAdd = ({ link, onClick }) => {
  return (
    <div>
      <Link to={link}>
        <button className="border-2 border-black flex bg-primary hover:bg-green-700 rounded-full h-14 w-32 items-center px-8 shadow focus:outline-none position-absolute"
          onClick={onClick}
        >
          <FaPlus /><p className="mx-2 ">Add</p>
        </button>
      </Link>
    </div>
  )
}
export default ButtonAdd


