import { Fragment, useState } from "react";
import React from "react";

const Coba2 = () => {
    const [angka1, setAngka1] = useState(null)
    const [angka2, setAngka2] = useState(null)
    const [angka3, setAngka3] = useState()
    let i = angka1 + angka2;
    console.log(i)
    const handleTambah = () => {
        setAngka3(i)
        console.log(i)

    }

    return (
        <Fragment>
            <div className="block">
                <input placeholder="masukkan angka"
                    onChange={(e) => { setAngka1(e.target.value) }}
                ></input>
                <input placeholder="masukkan angka ke 2"
                    onChange={(e) => { setAngka2(e.target.value) }}
                ></input>
                <button onClick={handleTambah}>tambahkan</button>
                <p>Hasil : {angka3}</p>
            </div>
        </Fragment>
    )
}

export default Coba2;