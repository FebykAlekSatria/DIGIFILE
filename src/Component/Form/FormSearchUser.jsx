import { FaSearch } from "react-icons/fa";


const FormSearchUser = ({ name, activity, startDate, endDate, onClick }) => {
    return (
        <div>
            <div className="lg:flex block">
                <div className="block w-36 mx-2">
                    <div>
                        <label>Name</label>
                    </div>
                    <div className="flex rounded-lg border-2 border-black shadow w-full px-1">
                        <FaSearch size={20} />
                        <input type="input" className="rounded-lg w-full text-xs focus:outline-none"
                            name="Name"
                            onChange={name}
                        ></input>
                    </div>
                </div>
                <div className="block w-36 mx-2">
                    <div>
                        <label>Activity</label>
                    </div>
                    <div>
                        <select className="bg-white rounded-lg border-2 border-black shadow text-xs focus:outline-none"
                            name="Activity_id"
                            // value={ }
                            onChange={activity}
                        >
                            <option value={1}>Create Folder</option>
                            <option value={2}>Upload Folder</option>
                            <option value={3}>Rename Folder</option>
                            <option value={4}>Delete Folder</option>
                            <option value={5}>Recovery Folder</option>
                            <option value={6}>Upload File</option>
                            <option value={7}>Delete File</option>
                            <option value={8}>Rename File</option>
                            <option value={9}>Recovery Filer</option>
                            <option value={10}>Delate Trash File</option>
                            <option value={11}>Delate Trash Folder</option>
                        </select>
                    </div>
                </div>

                <div className="block w-36 mx-2">
                    <div>
                        <label>Start Date</label>
                    </div>
                    <div type="input" className="rounded-lg border-2 border-black shadow w-full text-xs">
                        <input type="date"
                            className="focus:outline-none"
                            onChange={startDate}
                        ></input>
                    </div>

                </div>

                <div className="block w-36 mx-2">
                    <div>
                        <label>End Date</label>
                    </div>
                    <div type="input" className="rounded-lg border-2 border-black shadow w-full text-xs">
                        <input type="date"
                            className="focus:outline-none"
                            onChange={endDate}
                        ></input>
                    </div>
                </div>
                <div className="block mx-2 items-center">
                    <button className="border-2 border-black bg-primary hover:bg-green-700  rounded-lg shadow px-2 mt-6"
                        onClick={onClick}
                    >Search</button>
                </div>
            </div>
        </div>

    )
}

export default FormSearchUser;