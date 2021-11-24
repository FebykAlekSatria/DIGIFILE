import React, { Fragment, useEffect, useState } from 'react'
import { FaServer } from 'react-icons/fa'
import ButtonAdd from '../Component/Button/ButtonAdd'
import MyDrive from '../Component/Button/MyDrive'
import MyDriveIsi from '../Container/MyDrive'
import Trash from '../Component/Button/Trash'
import Navbar from '../Component/Navbar/Navbar'
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import AddFolderFile from '../Component/Button/AddFolderFile'
import TrashIsi from './Trash'
import FormCreateFolder from '../Component/Form/FormCreateFolder'
import FormUploadFolder from '../Component/Form/FormUploadFolder'
import FormUploadFile from '../Component/Form/FormUploadFile'
import { USER_CREATEFOLDER, USER_MYDRIVE, USER_TRASH, USER_UPLOADFILE, USER_UPLOADFOLDER } from '../Constan/Route'
import axios from 'axios'
import { informationStorage } from '../Utils/API'

const User = () => {
    const [add, setAdd] = useState(false)
    const [totalStorage, setTotalStorage] = useState()
    const [usedStorage, setUsedStorage] = useState()
    const [idUser, setIdUser] = useState("56bbd44b-5cb2-4285-9cf9-4d239e175aec")

    const onClick = () => {
        add ? setAdd(false) : setAdd(true)
    }
    useEffect(() => {
        axios.get(informationStorage + idUser
        ).then((res) => {
            console.log(res)
            setUsedStorage(res.data.used)
            setTotalStorage(res.data.total)

        })
    }, [])
    return (
        <Fragment>
            <Router>
                <Route path={USER_CREATEFOLDER} component={FormCreateFolder} />
                <Route path={USER_UPLOADFOLDER} component={FormUploadFolder} />
                <Route path={USER_UPLOADFILE} component={FormUploadFile} />
                <Navbar />
                <div className="flex">
                    <div className="block md:px-32 px-5 pt-10 md:w-1/4 w-8 align-center z-40">
                        <ButtonAdd
                            onClick={onClick}
                        />
                        <div className="absolute mt-96 flex mb-44 text-secondary">
                            <FaServer size={40} /><p className="mx-4 text-black">Penyimpanan <br /> terpakai : 0.49 {usedStorage} <br /> Dari : 21{totalStorage}</p>
                        </div>
                        <div className="ml-4">
                            {add ? <AddFolderFile
                                createFolder={USER_CREATEFOLDER}
                                uploadFolder={USER_UPLOADFOLDER}
                                uploadFile={USER_UPLOADFILE}
                            /> : null}
                        </div>

                        <MyDrive
                            link={USER_MYDRIVE}
                        />
                        <Trash
                            link={USER_TRASH}
                        />
                    </div>
                    <div className="block md:w-3/4">
                        <Route path={USER_MYDRIVE} component={MyDriveIsi} />
                        <Route path={USER_TRASH} component={TrashIsi} />
                        <Route />

                    </div>
                </div>
            </Router>
        </Fragment>
    )

}

export default User