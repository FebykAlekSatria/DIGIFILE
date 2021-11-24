import React, { Fragment } from 'react'
import { FaFolder, FaRecycle, FaTrash } from 'react-icons/fa'

const FolderTrash = ({ recovery, remove, folder, name }) => {

    return (
        <Fragment>
            <div className="w-40">
                <FaFolder size={100} className="text-secondary hover:text-secondarydark mt-2 mx-6"
                    onClick={folder}>
                </FaFolder>
                <div className="absolute w-5 ml-24 -mt-16  text-white">
                    <div>
                        <button onClick={recovery}><FaRecycle size={15} /></button>
                    </div>
                    <div>
                        <button onClick={remove}><FaTrash size={15} /></button>
                    </div>
                </div>
                <p className="w-full wrapword h-5 text-center text-black truncate -mt-1">{name}</p>
                {/* <div className="mr-5 my-5 text-white">
                <button name="Idedit" className="flex items-center px-2 bg-secondary border-2 border-black space-x-2 w-40 h-10 rounded-lg focus:outline-none"
                    onClick={folder}
                >
                    <FaFolder size={20} /><p className="text-black truncate w-20">{name}</p>
                </button>
                <div className="absolute pl-32 -mt-10  -space-y-2">
                    <div>
                        <button onClick={recovery}><FaRecycle size={12} /></button>
                    </div>
                    <div>
                        <button onClick={remove}><FaTrash size={12} /></button>
                    </div>
                </div>
            </div> */}
            </div>
        </Fragment>
    )
}

export default FolderTrash