import axios from 'axios'
import React, { Fragment, useState, useEffect, useContext } from 'react'
import LogActivityTable from '../Component/Table/LogActivity'
import { Id } from '../Constan/Context'
import { logUserActivity } from '../Utils/API'

const LogActivity = () => {
    const [logActivity, setLogActivity] = useState(null)
    const [idItem, setIdUser] = useState("56bbd44b-5cb2-4285-9cf9-4d239e175aec")
    // const IdItem = useContext(Id)
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)

    useEffect(() => {
        // console.log("Ini Id Item : " + IdItem)
        axios.get(logUserActivity, {
            params: {
                Uid: idItem,
                Page: page
            }
        }).then(res => {
            console.log(res)
            setLogActivity(res.data.data)
        })
    }, [])
    const onChange = (data) => {
        setPage(data)
    }

    const pagePlus = () => {
        if (page < totalPage) {
            setPage(page + 1)
        }
    }

    const pageMinus = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }
    let pageindex = []
    for (let index = 1; index <= totalPage; index++) {
        pageindex.push(
            <option value={index}>{index}</option>
        )
    }
    return (
        <div className="w-full">
            <LogActivityTable
                logactivity={logActivity}
            />
            <div className="w-full py-2">
                <div className="m-auto w-36 rounded-lg shadow-inner">
                    <button className="bg-secondary hover:bg-secondarydark focus:outline-none rounded-xl shadow w-12 h-7 border-2 border-black"
                        onClick={pagePlus}
                    >+</button>
                    <select className="m-auto bg-white w-12 focus:outline-none"
                        value={page}
                        onChange={(e) => { onChange(e.target.value) }}
                    >
                        {pageindex}
                    </select>
                    <button className="bg-secondary hover:bg-secondarydark focus:outline-none rounded-xl shadow w-12 h-7 border-2 border-black"
                        onClick={pageMinus}
                    >-</button>
                </div>
            </div>
        </div>
    )
}

export default LogActivity