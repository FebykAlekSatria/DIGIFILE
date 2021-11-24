import React, { Component, Fragment, useContext, useEffect, useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Id } from '../../Constan/Context'
import { OWNER_LASTACTIVITY_EDITUSER, OWNER_LOGACTIVITY } from '../../Constan/Route'

const TableLastActivity = ({ lastActivity }) => {
    const [itemId, setItemId] = useState()
    const idItem = useContext(Id)
    const onClick = (data) => {
        setItemId(data)
        console.log("kili item " + idItem)
    }

    return (
        <Id.Provider value={itemId}>
            {console.log("item id di last : " + itemId)}
            <div className="h-72">
                <table className="table-fixed" className="mx-10 mb-10 text-center">
                    <thead>
                        <tr className="bg-primary border-2 border-black">
                            <th className="w-72">Name</th>
                            <th className="w-72">Last Activity Date</th>
                            <th className="w-60">Last Activity</th>
                            <th cldataassName="w-60">Quota</th>
                            <th className="w-48">Status</th>
                            <th className="w-20">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        </tr>
                        {lastActivity != null &&
                            lastActivity.map((data) => {
                                const number = 1
                                return (
                                    <tr key={data.user_id}>
                                        <Link to={OWNER_LOGACTIVITY}>
                                            <td onClick={() => onClick(data.username)}>{data.name}</td>
                                        </Link>
                                        <td>{data.tanggal}</td>
                                        <td>{data.last_activity}</td>
                                        <td>{data.kuota}</td>
                                        <td>{data.status}</td>
                                        <Link to={OWNER_LASTACTIVITY_EDITUSER}>
                                            <td className="px-3" onClick={() => onClick(data.username)}><FaPen /></td>
                                        </Link>

                                    </tr>
                                )

                            }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </Id.Provider>
    )
}

export default TableLastActivity