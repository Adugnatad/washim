import React from 'react'

export const Header = () => {
    return (
        <div className='flex flex-row justify-between items-center w-full bg-primary text-white font-medium p-5 fixed'>
            <span className='flex flex-row items-center'><img src='/assets/WASHIMSLOGO.png' alt='' /> WASHIMS</span>
            <div className='flex flex-row items-center'>
                <div className='space-x-5'>
                    <span>Home</span>
                    <span>Data</span>
                    <span>Resources</span>
                    <span>WASHNORM</span>
                </div>
                <button className='flex items-center mx-[50px] bg-[#1EB53A]
                p-[5px] px-[20px] rounded-[50px] hover:bg-green-100 hover:text-[#1EB53A] font-normal'>Login</button>
            </div>
        </div>
    )
}
