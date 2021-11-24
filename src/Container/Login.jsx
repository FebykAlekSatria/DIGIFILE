import axios from 'axios';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import Image from '../Assets/Image/Login.png'
import FormLogin from '../Component/Form/FormLogin';
import LogoLogin from '../Component/Picture/LogoLogin';
import { Id, IdUser } from '../Constan/Context';
import { OWNER_LASTACTIVITY, USER_MYDRIVE } from '../Constan/Route';
import { baseURL } from '../Utils/API';

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [id, setId] = useState()
    const [visible, setVisible] = useState(false)
    const history = useHistory()

    const setShow = () => {
        setVisible(visible ? false : true)
    }

    const login = () => {
        const params = new URLSearchParams()
        params.append('Username', username)
        params.append('Password', password)
        axios.post(baseURL + '/login', params)
            .then(res => {
                console.log(res)
                if (res.data.data === 1) {
                    setId(res.data.data)
                    history.push(OWNER_LASTACTIVITY)
                }
                else if (res.data.data === 2) {
                    setId(res.data.data)
                    history.push(USER_MYDRIVE)
                }
                sessionStorage.setItem("id", id)
            })

    }

    return (
        <Id.Provider value={id}>
            <div className="bg-secondary h-20 shadow-md">
                <p className="text-center py-3 font-bold text-5xl text-white">DIGIFILE</p>
            </div>
            <div className="md:flex block">
                <div className="md:w-1/2">
                    <img src={Image} alt="Illustration" height={400} width={700} className="fixed m-auto mt-400" />
                </div>
                <div className="md:w-1/2 md:mt-0 mt-96">
                    <div className="md:w-1/2 w-full mt-28 m-auto">
                        <LogoLogin />
                        <FormLogin
                            setUsername={(e) => { setUsername(e.target.value) }}
                            setPassword={(e) => { setPassword(e.target.value) }}
                            visible={visible}
                            setVisible={setShow}
                            onClick={login}
                        />
                    </div>
                </div>
            </div>
        </Id.Provider>
    )
}
export default Login;