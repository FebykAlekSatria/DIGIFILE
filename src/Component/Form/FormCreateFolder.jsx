import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { USER_MYDRIVE } from '../../Constan/Route'
import { createFolder } from '../../Utils/API'

const FormCreateFolder = ({ currentPath, userName }) => {
    const [nameFolder, setNameFolder] = useState()
    const [idUser, setIdUser] = useState("56bbd44b-5cb2-4285-9cf9-4d239e175aec")

    const create = () => {
        const params = new URLSearchParams()
        params.append('Uid', idUser)
        params.append('Folder_name', nameFolder)
        params.append('Parent_id', idUser)
        axios.post(createFolder, params).then((res) => {
            console.log(res)
        })
    }

    return (
        <div className="z-50 absolute bg-black bg-opacity-90 w-full h-screen">
            <div className="bg-white rounded-2xl md:w-1/4 w-full mt-64 m-auto shadow p-5 space-y-10 align-center">
                <h1 className="text-center text-xl font-bold text-primary">Create Folder</h1>
                <input className="border-2 border-black rounded-xl p-2 w-full m-auto focus:outline-none" type="text"
                    onChange={(e) => setNameFolder(e.target.value)}
                    placeholder="Input Folder Name"
                ></input>
                <div className="m-auto w-44 space-x-2" >
                    <button className="bg-primary hover:bg-green-700 border-2 border-black shadow mb-2 rounded-2xl w-20 h-10 font-bold focus:outline-none"
                        onClick={create}
                    >Create</button>
                    <Link to={USER_MYDRIVE}>
                        <button className="bg-secondary border-2 border-black hover:bg-secondarydark shadow rounded-2xl w-20 h-10 font-bold focus:outline-none">Back</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default FormCreateFolder