import axios from "axios"
import { useEffect, useState } from "react"
import { logActivity, pageLogs, searchLashActivity } from '../Utils/API'
import { OWNER_LASTACTIVITY, OWNER_LASTACTIVITY_ADDUSER } from '../Constan/Route';

import ButtonAdd from "../Component/Button/ButtonAdd"
import FormAddUser from "../Component/Form/FormAddUser"
import FormSearchUser from "../Component/Form/FormSearchUser"
import TableLastActivity from "../Component/Table/LastActivity"
import FormEditUser from "../Component/Form/FormEditUser";

const LastActivity = () => {
    // const [addUser, setAddUser] = useState(false)
    // const [editUser, setEditUser] = useState(false)
    // const [idUser, setIdUser] = useState()

    const [name, setName] = useState()
    const [activity, setActivity] = useState(1)
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [lastActivity, setLastActivity] = useState()

    const search = () => {
        console.log(searchLashActivity)
        axios.get(searchLashActivity, {
            params: {
                Name: name,
                Activity_id: activity,
                Start_date: startDate,
                End_date: endDate
            }
        }).then(res => {
            setLastActivity(res.data.data)
        })
    }
    let split;
    useEffect(() => {
        axios.get(pageLogs).then(res => {
            split = Math.ceil(res.data / 10)
            setTotalPage(Math.ceil(res.data / 10))
            console.log(totalPage)
        })
        axios.get(logActivity, {
            params: {
                Page: page
            }
        }).then(res => {
            setLastActivity(res.data.data)
            console.log(res)
        }).catch(error => {
            console.log(error)
        })
    }, [page])

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
            <div className="flex px-10 py-5 justify-between">
                <ButtonAdd
                    onClick={OWNER_LASTACTIVITY_ADDUSER} />
                <FormSearchUser
                    name={(e) => { setName(e.target.value) }}
                    activity={(e) => { setActivity(e.target.value) }}
                    startDate={(e) => { setStartDate(e.target.value) }}
                    endDate={(e) => { setEndDate(e.target.value) }}
                    onClick={search}
                />
            </div>
            <TableLastActivity
                lastActivity={lastActivity}
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

export default LastActivity