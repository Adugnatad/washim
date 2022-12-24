import { FaBars } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"
import React, { useState } from 'react';


export const Header = ({ setPage, page }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handlePageClick = (page) => {
        setPage(page)
        setMenuOpen(false);
    }
    return (
        <div className='flex flex-row justify-between items-center w-[100%] bg-primary text-white font-medium p-3 fixed z-10 relative'>
            <span className='flex flex-row items-center'><img src='/assets/WASHIMSLOGO.png' alt='' /> WASHIMS</span>
            <div className='flex flex-row items-center'>
                <div className='hidden space-x-10 md:flex'>
                    <span onClick={() => setPage("Home")} className={`${page === "Home" && "border-b-[3px] border-[#fff] pb-1 "} cursor-pointer`}>Home</span>
                    <span onClick={() => setPage("Data")} className={`${page === "Data" && "border-b-[3px] border-[#fff] pb-1 "} cursor-pointer`}>Data</span>
                    <span onClick={() => setPage("Resources")} className={`${page === "Resources" && "border-b-[3px] border-[#fff] pb-1 "} cursor-pointer`}>Resources</span>
                    <span>WASHNORM</span>
                </div>
                <button className='hidden items-center mx-[50px] bg-[#1EB53A]
                p-[5px] px-[30px] rounded-[50px] hover:bg-green-100 hover:text-[#1EB53A] font-normal md:flex'>Login</button>
                <div className='md:hidden mr-10' >
                    {!menuOpen ?
                        <FaBars size={20} className="cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
                        : <IoMdClose size={30} className="cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
                    }
                </div>
                {menuOpen && <div className='md:hidden bg-white text-[#000] absolute flex flex-col items-center justify-start top-[100px] right-[30px] px-20 menu w-[90%] '>
                    <span onClick={() => handlePageClick("Home")} className="mt-3 cursor-pointer hover:bg-primary hover:text-white p-1 w-full flex flex-col items-center">Home</span>
                    <span onClick={() => handlePageClick("Data")} className="mt-3 cursor-pointer hover:bg-primary hover:text-white p-1 w-full flex flex-col items-center">Data</span>
                    <span onClick={() => handlePageClick("Resources")} className="mt-3  cursor-pointer hover:bg-primary hover:text-white p-1 w-full flex flex-col items-center">Resources</span>
                    <span onClick={() => { }} className="mt-3 mb-3 p-1 px-3 rounded-[10px] text-[#fff] cursor-pointer bg-primary">Login</span>
                    {/* <span>WASHNORM</span> */}
                </div>}
            </div>
        </div>
    )
}
