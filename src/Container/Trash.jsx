import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import FileDoc from '../Component/FolderFile/FileTrash'
import FolderTrash from '../Component/FolderFile/FolderTrash'
import { deleteTrashFolder, recoveryTrash, trashFolderList, trashFileList } from '../Utils/API'

const TrashIsi = () => {
    const [trashFolder, setTrashFolder] = useState([])
    const [trashFile, setTrashFile] = useState([])
    const [idUser, setIdUser] = useState("56bbd44b-5cb2-4285-9cf9-4d239e175aec")
    // const idUser = useContext(Id)

    useEffect(() => {
        axios.get(trashFolderList + idUser

        ).then((res) => {
            console.log("ini isi folder : " + res.data.Data)
            setTrashFolder(res.data.Data)
        })
        axios.get(trashFileList + idUser
        ).then((res) => {
            console.log("ini isi file : " + res.data.Data)
            setTrashFile(res.data.Data)
        })
    }, [])

    const recovery = (data) => {
        console.log(data)

        const params = new URLSearchParams()
        params.append('Item_id', data)
        axios.put(recoveryTrash, params
        ).then((res) => {
        })
    }
    const remove = (data) => {
        axios.delete(deleteTrashFolder, {
            data: {
                Item_id: data,
            }
        }).then((res) => {
            console.log(res)
        })
    }
    // const deleteFile = (data) => {
    //     axios.delete(deleteTrashFolder, {
    //         data: {
    //             Item_id: data,
    //         }
    //     }).then((res) => {
    //         console.log(res)
    //     })
    // }
    return (
        <div className="flex flex-wrap">
            <FolderTrash
                name="Belajar Indonesia"
            />
            <FolderTrash
                name="Backup"
            />
            <FolderTrash
                name="Img"
            />

            <FileDoc
                name="Laporan"
                extension="docx"
            />

            {
                trashFolder.map((data) => {
                    return (
                        <FolderTrash
                            name={data.name}
                            recovery={() => { recovery(data.id) }}
                        // remove={remove(data.id)}
                        />
                    )
                })
            }

            {
                trashFile.map((data) => {
                    if (data.ekstensi === "mp4") {
                        <FileDoc
                            name={data.name}
                            extension={data.ekstensi}
                            remove={() => { remove(data.id) }}
                            recovery={() => { recovery(data.id) }}

                        />

                    }
                    else if (data.ekstensi === "jpg") {
                        //   const src = "http://192.168.0.188:12345/download_file/?Username="+sessionStorage.getItem("Usernameuser")+"&Current_path=/&File_name="+this.state.Isisemua[i]
                        <FileDoc />
                    }
                    else if (data.ekstensi === "png") {
                        //   const src = "http://192.168.0.188:12345/download_file/?Username="+sessionStorage.getItem("Usernameuser")+"&Current_path=/&File_name="+this.state.Isisemua[i]
                        <FileDoc />
                    }
                    else if (data.ekstensi === "jpeg") {
                        // const src = "http://192.168.0.188:12345/download_file/?Username=" + sessionStorage.getItem("Usernameuser") + "&Current_path=/&File_name=" + this.state.Isisemua[i]
                        <FileDoc />
                    }
                    else if (data.ekstensi === "gif") {
                        //   const src = "http://192.168.0.188:12345/download_file/?Username="+sessionStorage.getItem("Usernameuser")+"&Current_path=/&File_name="+this.state.Isisemua[i]
                        <FileDoc />
                    }
                    else if (data.ekstensi === "docx") {
                        <FileDoc />
                    }
                    else if (data.ekstensi === "obb") {
                        <FileDoc />
                    }
                    else {
                        return (
                            <FileDoc
                                name={data.name}
                                extension={data.ekstensi}
                                remove={() => { remove(data.id) }}
                                recovery={() => { recovery(data.id) }}

                            />
                        )

                    }
                })
            }

        </div>
    )
}

export default TrashIsi