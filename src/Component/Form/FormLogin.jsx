import React, { Fragment } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = ({ setUsername, setPassword, visible, setVisible, onClick }) => {

    return (
        <Fragment>
            {/* <form> */}
            <input className="bg-white-100 shadow-inner w-full rounded-2xl h-10 text-grey-100 font-bold p-4 my-5 focus:outline-none"
                type="text"
                placeholder="Username"
                onChange={setUsername}
            ></input>
            <div className="items-center">
                <input className="bg-white-100 shadow-inner w-full rounded-2xl h-10 text-grey-100 font-bold p-4 focus:outline-none"
                    type={visible ? "text" : "password"}
                    placeholder="Password"
                    onChange={setPassword}
                ></input>
                {
                    visible ? <i className="absolute -ml-10 mt-2"><FaEye size={20} onClick={setVisible} /></i> :
                        <i className="absolute -ml-10 mt-2"><FaEyeSlash size={20} onClick={setVisible} /></i>
                }

            </div>
            <br />
            {/* <Link to="owner/lastactivity"> */}
            <button className="w-full bg-secondary hover:bg-secondarydark shadow-lg mt-5 mb-6 py-3 px-5 rounded-2xl font-bold focus:outline-none text-white"
                onClick={onClick}
            >Login</button>
            {/* </Link> */}
            {/* </form> */}
        </Fragment>
    )

}

export default Login;