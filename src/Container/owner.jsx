import React from 'react';
// import CobaRoute from '../Hanya Coba/COBAROUTE'
import Navbar from '../Component/Navbar/Navbar';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import Image from '../Assets/Image/Owner.png'
import { FaUsers } from 'react-icons/fa';
import LastActivity from './LastActivity';
import FormAddUser from '../Component/Form/FormAddUser';

import FormEditUser from '../Component/Form/FormEditUser';
import { OWNER_LASTACTIVITY, OWNER_LASTACTIVITY_ADDUSER, OWNER_LOGACTIVITY, OWNER_LASTACTIVITY_EDITUSER } from '../Constan/Route';
import LogActivity from './LogActivity';

const Owner = () => {
    return (
        <div className="h-screen">
            <img src={Image} alt="Illustration" width={700} className="-ml-16 mt-20 absolute absolute object-cover" />
            <Router>
                <Route path={OWNER_LASTACTIVITY_ADDUSER}>
                    <FormAddUser
                    />
                </Route>
                <Route path={OWNER_LASTACTIVITY_EDITUSER}>
                    <FormEditUser
                    />
                </Route>
                <div className="z-20 w-full relative">
                    <Navbar />
                </div>
                <div>
                    <div className="z-20 absolute w-full" >
                        <div className="flex md:w-3/4 w-full mt-32 md:mx-auto">
                            <Link to={OWNER_LASTACTIVITY} className="flex bg-primary hover:bg-green-700  border-2 border-black py-2 md:w-56 h-10 p-5 rounded-tr-3xl focus:outline-none">
                                <FaUsers className="flex-row md:mx-5 mx-2" size={20} /> All User
                        </Link>
                            <Link to={OWNER_LOGACTIVITY} className="flex bg-secondary hover:bg-secondarydark border-2 border-black py-2 md:w-56 h-10 p-5 rounded-tr-3xl focus:outline-none">
                                <FaUsers className="flex md:mx-5 mx-2" size={20} /> <p>Activity User</p>
                            </Link>
                            {/* <Link to={OWNER_EDITUSER} className="flex bg-tertiary hover:bg-yellow-500 border-2 border-black py-2 md:w-56 h-10 p-5 rounded-tr-3xl focus:outline-none">
                                <FaUsers className="flex md:mx-5 mx-2" size={20} /> <p>Edit User</p>
                            </Link> */}
                        </div>
                        <div className="bg-white md:m-auto flex md:w-3/4 w-full border-2 border-black rounded-tr-xl shadow-3xl">
                            <Route path={OWNER_LASTACTIVITY} component={LastActivity} />
                            <Route path={OWNER_LOGACTIVITY} component={LogActivity} />
                            {/* <Route path={OWNER_EDITUSER} component={FormEditUser} /> */}
                            {/* <Route path="/coba2" component={Coba2} /> */}
                        </div>
                        <div className="bg-primary w-full md:m-auto md:w-3/4 w-full border-2 border-black rounded-b-xl py-2">
                            <p className="text-center font-bold">Digital Creative</p>
                        </div>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default Owner