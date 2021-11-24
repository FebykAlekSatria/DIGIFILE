import React from 'react';
import Avatar from 'react-avatar';

const Profil = () => {
    return (
        <button className="w-12 h-12 rounded-full overflow-hidden items-center shadow-md">
            <Avatar className="mx-auto" size={50} name="Febyk Alek sa" textSizeRatio={1.75} />
        </button>
    )
}

export default Profil