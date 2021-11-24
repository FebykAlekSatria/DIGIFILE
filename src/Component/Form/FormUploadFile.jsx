import { data } from 'autoprefixer'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Id } from '../../Constan/Context'
import { USER_MYDRIVE } from '../../Constan/Route'
import { uploadFile } from '../../Utils/API'

const FormUploadFile = ({ userName }) => {
    const [addFile, setAddFile] = useState()
    // const [idUser, setIdUser] = useState("56bbd44b-5cb2-4285-9cf9-4d239e175aec")
    const idUser = useContext(Id)
    const upload = () => {
        let file = addFile
        let formdata = new FormData()
        for (let i = 0; i < addFile.length; i++) {
            formdata.append('myfiles', file[i])
            // console.log(file[i])
        }

        // axios({
        //     url: 'http://192.168.8.107:12345/user/upload_file?Uid=' + (idUser) + '&Parent_id=' + (idUser),
        //     method: "POST",
        //     data: formdata
        // }).then((res) => {
        //     console.log(res)

        const params = new URLSearchParams()
        params.append('Uid', Id.id)
        params.append('Parent_id', idUser)
        console.log(file)
        axios({
            url: uploadFile, params,
            method: "POST",
            data: formdata
        }).then((res) => {
            console.log(res)
        })
    }
    //     )Fragment
    // }

    return (
        <div className="z-50 absolute bg-black bg-opacity-90 w-full h-screen">
            <div className="bg-white rounded-2xl md:w-1/4 w-full mt-64 m-auto shadow p-5 space-y-10 align-center">
                <h1 className="text-center text-xl font-bold text-primary">Upload File</h1>
                <input className="border-2 border-black rounded-xl p-2 w-full m-auto focus:outline-none"
                    type="file"
                    multiple
                    name="myfiles"
                    onChange={(e) => setAddFile(e.target.value)}
                    placeholder="Input Folder Name"
                ></input>
                <div className="m-auto w-44 space-x-2" >
                    <button className="bg-primary hover:bg-green-700 border-2 border-black shadow mb-2 rounded-2xl w-20 h-10 font-bold focus:outline-none"
                        type="submit"
                        onClick={(e) => { upload(e) }}
                    >Upload</button>
                    <Link to={USER_MYDRIVE}>
                        <button className="bg-secondary border-2 border-black hover:bg-secondarydark shadow rounded-2xl w-20 h-10 font-bold focus:outline-none">Back</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default FormUploadFile