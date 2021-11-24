import { defaults } from 'autoprefixer'
import React from 'react'
import { defaultStyles, FileIcon } from "react-file-icon"
import { FaRecycle, FaTrash } from "react-icons/fa"

const FileDoc = ({ recovery, remove, name, extension }) => {
    return (
        <button >
            <div>
                <div className="block absolute ml-32 space-y-1">
                    <div>
                        <button className="-ml-8 mt-10 bg-black text-white rounded-lg p-1 text-border-2 text-border-white" onClick={recovery}><FaRecycle size={12} /></button>
                    </div>
                    <div>
                        <button className="-ml-8 mt-1 bg-black text-white rounded-lg p-1 text-border-2 text-border-white" onClick={remove}><FaTrash size={12} /></button>
                    </div>
                </div>
            </div>
            <button id="btn" className="mx-5 my-10 w-28 h-36 text-sm text-center rounded-lg focus:outline-none rounded" type="submit"
            >
                <FileIcon extension={extension}{...defaultStyles.docx} />
                <p className="wrapword">{name}</p>
            </button>
        </button>
    )
}
export default FileDoc

// const fileFoto = ({ recovery, remove, src, name }) => {
//     return (
//         <button>
//             <div>
//                 <div className="block absolute ml-32 space-y-1">
//                     <div>
//                         <button className="-ml-8 mt-10 bg-black text-white rounded-lg p-1 text-border-2 text-border-white" onClick={recovery}><FaRecycle size={12} /></button>
//                     </div>
//                     <div>
//                         <button className="-ml-8 mt-1 bg-black text-white rounded-lg p-1 text-border-2 text-border-white" onClick={remove}><FaTrash size={12} /></button>
//                     </div>
//                 </div>
//             </div>
//             <button id="btn" className="mx-5 my-10 w-28 h-36 text-sm text-center rounded-lg focus:outline-none rounded" type="submit"
//             >
//                 <img className="w-full h-32 object-cover rounded-xl " src={src} alt="">
//                 </img>
//                 <p className="wrapword">{name}</p>
//             </button>
//         </button>
//     )
// }
// export default fileFoto