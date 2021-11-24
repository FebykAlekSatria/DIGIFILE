import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { logUserActivity } from '../../Utils/API'

const LogActivityTable = ({ logactivity }) => {
    return (
        <div className="h-72">
            <table className="table-auto" className="m-10 text-center p-2 border-2 border-black ">
                <thead>
                    <tr className="bg-secondary">
                        <th className="w-5 px-5">No</th>
                        <th className="w-1/2 px-5">Tanggal</th>
                        <th className="w-1/2 px-5">Last Activity</th>
                    </tr>
                </thead>
                <tbody className="align-items-center">
                    {logactivity != null &&
                        logactivity.map((data) => {
                            // {ah++}
                            return (
                                <tr className="border-2">
                                    <td></td>
                                    <td>{data.tanggal}</td>
                                    <td className="text-left">{data.last_activity}</td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </table>
        </div>

    )
}

export default LogActivityTable