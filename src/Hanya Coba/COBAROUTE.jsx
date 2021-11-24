import { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import Coba1 from "../counter/coba1";
import Coba2 from "../counter/coba2";

const CobaRoute = () => {
    const [input, setInput] = useState("");
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(4);

    return (
        <div>
            <header className="">
                <div className="z-50 flex justify-between bg-white shadow border-b-1 w-full h-16 items-center px-20 mb-1">
                    <div>
                        <p>PLM</p>
                    </div>
                    <div>
                        <input className="bg-white border-2 w-30 rounded-lg h-10 px-5" placeholder="search"
                            onChange={(e) => setInput(e.target.value)}></input>
                        {console.log(input)}
                    </div>
                    <p>ini hasil : {input}</p>
                    <p>ini hasil : {value}</p>
                    <p>ini hasil2 : {value2}</p>


                    <button onClick={() => {
                        setValue(value + 1);
                        setValue2(value2 + 1);
                    }}>tambah</button>
                    <button onClick={() => setValue(value - 1)}>kurang</button>


                </div>
            </header>
            <body className="flex z-40">
                <Router>
                    <div className="bg-white w-72 h-screen border-r-2 px-5 py-10">
                        <input className="border-2 w-20 h-8"></input>
                        <ul>
                            <li>
                                <Link to="/coba1">Coba 1</Link>
                            </li>
                            <li>
                                <Link to="/coba2">Coba 2</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <Route path="/coba1" component={Coba1} />
                        <Route path="/coba2" component={Coba2} />
                        {/* <Route path="" component={}/> */}

                    </div>
                </Router>
            </body>
        </div>
    );
}

export default CobaRoute;
