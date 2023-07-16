import React, { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        const handleFixHeader = () => {
            console.log("Fix");
        };
        window.addEventListener("scroll", handleFixHeader);
    }, []);
    return (
        <div className='p-5 bg-black w-full'>
            
        </div>
    );
};

export default Header;