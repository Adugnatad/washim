import React from 'react'

export const Footer = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap items-center justify-between text-white py-4 px-4 bg-[#001626] mt-[100px]'>
            <div className='md:ml-7 flex flex-row items-center'>
                <span className='text-[25px] mr-2'>©</span>
                2022 WASHIMS. All Rights Reserved
            </div>
            <div>
                <ul className='flex flex-row flex-wrap space-x-2 text-[12px]'>
                    <li>ABOUT US</li>
                    <span>|</span>
                    <li>RESOURCES</li>
                    <span>|</span>
                    <li>LEGAL</li>
                    <span>|</span>
                    <li>CONTACT US</li>
                </ul>
            </div>
        </div>
    )
}