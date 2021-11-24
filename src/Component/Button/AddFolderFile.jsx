import React from 'react';
import { FaFile, FaFolder, FaFolderPlus } from "react-icons/fa";
import {
    Link
} from "react-router-dom";


const AddFolderFile = ({ createFolder, uploadFolder, uploadFile }) => {
    return (
        <div>
            <Link to={createFolder}>
                <div className="my-5 flex hover:text-green-700 text-primary">
                    <FaFolder size={30} /><p className="mx-4 text-black">Create Folder</p>
                </div>
            </Link>
            <Link to={uploadFolder}>
                <div className="my-5 flex hover:text-green-700 text-primary">
                    <FaFolderPlus size={30} /><p className="mx-4 text-black">Upload Folder</p>
                </div>
            </Link>
            <Link to={uploadFile}>
                <div className="my-5 flex hover:text-green-700 text-primary">
                    <FaFile size={30} /><p className="mx-4 text-black">Upload File</p>
                </div>
            </Link>
        </div>
    )
}
export default AddFolderFile