import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Id } from '../../Constan/Context'
import { OWNER_LASTACTIVITY } from '../../Constan/Route'
import { editUser, infomationUser } from '../../Utils/API'
const FormEditUser = () => {
    const [idUser, setIdUser] = useState("56bbd44b-5cb2-4285-9cf9-4d239e175aec")
    // const idUser = useContext(Id)
    const [username, setUsername] = useState()
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [space, setSpace] = useState()
    const [phoneFormat, setPhoneFormat] = useState("+62")

    const edit = () => {
        const params = new URLSearchParams()
        params.append('Uid', idUser)
        params.append('Username', username)
        params.append('Name', name)
        params.append('Password', password)
        params.append('Phone', phoneFormat + phone)
        params.append('Email', email)
        params.append('Space', space)
        axios.post(editUser, params)
            .then(res => {
                console.log(res)
            })
    }

    useEffect(() => {
        axios.get(infomationUser, {
            params: {
                Uid: idUser
            }
        }).then(res => {
            console.log(res)
            setUsername(res.data.Username)
            setName(res.data.Name)
            setEmail(res.data.Email)
            setPhoneFormat(res.data.Phone.slice(0, 3))
            setPhone(res.data.Phone.slice(3))
            setSpace(res.data.Space)
        })
    }, [idUser])
    return (
        <div className="z-50 absolute bg-black bg-opacity-90 w-full h-screen items-center align-center">
            <div id="list" className="bg-white rounded-lg w-2/5 h-auto mt-64 m-auto shadow py-1">
                <h1 className="text-3xl text-shadow-md text-gray-400 font-bold text-center my-5">Edit Account</h1>
                <div>
                    <div className="flex">
                        <div className="block mx-10">
                            <label className="block font-bold text-primary">Username</label>
                            <input className=" block shadow rounded-lg w-full h-10 text-grey-100 font-bold p-4 mb-5 focus:outline-none" type="text" placeholder="Username"
                                value={username}
                                onChange={(e) => { setUsername(e.target.value) }}
                                disabled
                            >
                            </input>
                        </div>
                        <div className="block mx-10">
                            <label className="block font-bold text-primary">Name</label>
                            <input className="block shadow bg-white-100 rounded-lg w-full h-10 text-grey-100 font-bold p-4 mb-5  focus:outline-none" type="text" placeholder="Name"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                            >
                            </input>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="block mx-10">
                            <label className="block font-bold text-primary">Password</label>
                            <input className=" block shadow bg-white-100 rounded-lg w-full h-10 text-grey-100 font-bold p-4 mb-5 focus:outline-none" type="password" placeholder="Password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            >
                            </input>
                        </div>
                        <div className="block mx-5">
                            <label className="block font-bold text-primary">Phone</label>
                            <div className="block shadow bg-white-100 rounded-lg h-10 text-grey-100 font-bold mb-5 focus:outline-none">
                                <select className="absolute m-2 bg-white focus:outline-none font-bold"
                                    value={phoneFormat}
                                    onChange={(e) => { setPhoneFormat(e.target.value) }}
                                >
                                    <option value="+62">+62</option>
                                    <option value="+42">+42</option>
                                </select>
                                <input className="block ml-20 bg-white-100 rounded-lg w-56 h-10 text-grey-100 font-bold p-4 mb-5 focus:outline-none" type="number" placeholder="phone"
                                    value={phone}
                                    onChange={(e) => { setPhone(e.target.value) }}
                                >
                                </input>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="block mx-10">
                            <label className="block font-bold text-primary">Email</label>
                            <input className="block shadow bg-white-100 rounded-lg w-full h-10 text-grey-100 font-bold p-4 mb-5 focus:outline-none" type="text" placeholder="Ex :..@email.com"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            >
                            </input>
                        </div>
                        <div className="block mx-10">
                            <label className="block font-bold text-primary">Space</label>
                            <input className="block shadow bg-white-100 rounded-lg w-full h-10 text-grey-100 font-bold p-4 mb-5 focus:outline-none" type="number" placeholder="bilangan integer"
                                value={space}
                                onChange={(e) => { setSpace(e.target.value) }}
                            >
                            </input>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div className="m-auto space-x-5">
                        <Link to={OWNER_LASTACTIVITY}>
                            <button className="bg-primary hover:bg-green-700  shadow mb-2 rounded-2xl w-20 h-10 font-bold focus:outline-none"
                                onClick={edit}
                            >Edit</button>
                        </Link>

                        <Link to={OWNER_LASTACTIVITY}>
                            <button className="bg-secondary hover:bg-secondarydark shadow rounded-2xl w-20 h-10 font-bold focus:outline-none">Back</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default FormEditUser