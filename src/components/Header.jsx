import React from 'react'

export const Header = ({ setPage, page }) => {
    return (
        <div className='flex flex-row justify-between items-center w-full bg-primary text-white font-medium p-3 fixed z-10'>
            <span className='flex flex-row items-center'><img src='/assets/WASHIMSLOGO.png' alt='' /> WASHIMS</span>
            <div className='flex flex-row items-center'>
                <div className='space-x-10'>
                    <span onClick={() => setPage("Home")} className={`${page === "Home" && "border-b-[3px] border-[#fff] pb-1 "} cursor-pointer`}>Home</span>
                    <span onClick={() => setPage("Data")} className={`${page === "Data" && "border-b-[3px] border-[#fff] pb-1 "} cursor-pointer`}>Data</span>
                    <span onClick={() => setPage("Resources")} className={`${page === "Resources" && "border-b-[3px] border-[#fff] pb-1 "} cursor-pointer`}>Resources</span>
                    <span>WASHNORM</span>
                </div>
                <button className='flex items-center mx-[50px] bg-[#1EB53A]
                p-[5px] px-[30px] rounded-[50px] hover:bg-green-100 hover:text-[#1EB53A] font-normal'>Login</button>
            </div>
        </div>
    )
}
