import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import FileDocDrive from '../Component/FolderFile/File'
import FolderDrive from '../Component/FolderFile/Folder'
import NavbarMyDrive from '../Component/Navbar/NavbarMyDrive'
import { fileList, folderList } from '../Utils/API'

const MyDriveIsi = () => {
    const [filter, setFilter] = useState(0)
    const [file, setFile] = useState()
    const [folder, setFolder] = useState()
    const [idUser, setIdUser] = useState("56bbd44b-5cb2-4285-9cf9-4d239e175aec")
    const [parentId, setParentID] = useState("56bbd44b-5cb2-4285-9cf9-4d239e175aec")

    useEffect(() => {
        if (filter === 0) {
            axios.get(fileList, {
                params: {
                    Uid: idUser,
                    Parent_id: parentId
                }
            }).then((res) => {
                console.log(res.data.Data)
                setFile(res.data.Data)
            })
            axios.get(folderList, {
                params: {
                    Uid: idUser,
                    Parent_id: parentId
                }
            }
            ).then((res) => {
                console.log(res.data.Data)
                setFolder(res.data.Data)
            })
        }
        else if (filter === 1) {
            axios.get(folderList, {
                params: {
                    Uid: idUser,
                    Parent_id: parentId
                }
            }
            ).then((res) => {
                console.log(res.data.Data)
                setFolder(res.data.Data)
            })
            // setFile("")
        }
        else if (filter === 2) {
            axios.get(fileList, {
                params: {
                    Uid: idUser,
                    Parent_id: parentId
                }
            }).then((res) => {
                console.log(res.data.Data)
                setFile(res.data.Data)
            })
        }
        // setFolder("")

    }, [filter])

    // useEffect(() => {
    //     console.log(filter)
    //     if (filter === "0") {
    //         // setTrash("ini ALL")
    //     } else if (filter === "1") {
    //         setFolderTrash("ini Folder")
    //     } else {
    //         setFileTrash("ini File")
    //     }
    // }, [filter])
    return (
        <Fragment>
            <div className="w-full">
                <NavbarMyDrive
                    filter={(e) => { setFilter(e.target.value) }}
                />
            </div>
            <div className="w-full">
                <div className="flex flex-wrap whitespace-normal">
                    <FolderDrive
                        name="Belajar kalkulus"
                    />
                    <FolderDrive
                        name="Belajar Alpro"
                    />
                    <FolderDrive
                        name="Belajar React"
                    />
                    <FolderDrive
                        name="Kerja Praktek"
                    />
                    <FolderDrive
                        name="Folder ku"
                    />
                    <FolderDrive
                        name="Belajar"
                    />
                    <FolderDrive
                        name="Project"
                    />
                    <FolderDrive
                        name="API"
                    />
                    <FolderDrive
                        name="Documentasi"
                    />

                </div>





                <FileDocDrive
                    name="Hello Word"
                    extension="pdf"
                />
                {/* {
                    folder.map((data) => {
                        return (
                            <FolderDrive
                                name={data.name}
                            />
                        )
                    })
                }
                

                {
                    file.map((data) => {
                        return (
                            <FileDocDrive
                                name={data.name}
                                extension={data.ekstensi}
                            />
                        )
                    })
                } */}
            </div>
        </Fragment>
    )
}

export default MyDriveIsi