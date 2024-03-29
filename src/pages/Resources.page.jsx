import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { MdKeyboardArrowDown } from "react-icons/md"
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai"
import { Footer } from '../components'

const Resources = () => {

    const data = [
        {
            backgroundImage: "url('/assets/Feature1.png')",
            title: 'Drinking water and hygiene in Africa',
        },
        {
            backgroundImage: "url('/assets/Feature2.png')",
            title: 'Training on drinking water, sanitation and hygiene in Africa',
        },
        {
            backgroundImage: "url('/assets/Feature3.png')",
            title: 'Progress on drinking water, sanitation and hygiene in Africa',
        },
        {
            backgroundImage: "url('/assets/Feature4.png')",
            title: 'Water, sanitation and hygiene in Africa',
        },
        {
            backgroundImage: "url('/assets/Rectangle 14.png')",
            title: 'Drinking water and hygiene in Africa',
        },
        {
            backgroundImage: "url('/assets/Rectangle 15.png')",
            title: 'Training on drinking water, sanitation and hygiene in Africa ',
        },
        {
            backgroundImage: "url('/assets/Rectangle 16.png')",
            title: 'Progress on drinking water, sanitation and hygiene in Africa ',
        },
        {
            backgroundImage: "url('/assets/Rectangle 17.png')",
            title: 'Water, sanitation and hygiene in Africa',
        },
        {
            backgroundImage: "url('/assets/Rectangle 14 (1).png')",
            title: 'Drinking water and hygiene in Africa',
        },
        {
            backgroundImage: "url('/assets/Rectangle 15 (1).png')",
            title: 'Training on drinking water, sanitation and hygiene in Africa ',
        },
        {
            backgroundImage: "url('/assets/Rectangle 16 (1).png')",
            title: 'Progress on drinking water, sanitation and hygiene in Africa ',
        },
        {
            backgroundImage: "url('/assets/Rectangle 17 (1).png')",
            title: 'Water, sanitation and hygiene in Africa',
        },
    ]
    return (
        <div>
            <div className='px-20'>
                <section>
                    <div className='flex flex-row space-x-2 bg-gradient-to-b from-[#30D44E] to-[#1B882F] text-white py-3 pl-7 my-5 rounded-[10px]'>
                        <img src='/assets/communitiesIconFeature.png' alt='' />
                        <span className='text-[18px]'>COMMUNITY</span>
                    </div>
                    <div
                        className='flex flex-row items-end pl-5 pb-7'
                        style={{
                            backgroundImage: "url('/assets/ResourcesImage.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            fontWeight: 700,
                            height: "334px",
                            width: "100%",
                        }}>
                        <span className='text-white text-[30px] md:text-[64px]'>RESOURCES</span>
                    </div>
                    <div className='flex flex-col md:flex-row space-y-3 items-end justify-center md:justify-start space-x-3  mb-5 mt-10'>
                        <select disabled className='bg-[#D9D9D9] p-2 px-3 w-[304px] rounded-[10px] select outline-0'>
                            <option value="" disabled selected hidden>Publication Date</option>
                        </select>
                        <select disabled className='bg-[#D9D9D9] p-2 px-3 w-[304px] rounded-[10px] select outline-0'>
                            <option value="" disabled selected hidden>Monitoring Category</option>
                        </select>
                        <select disabled className='bg-[#D9D9D9] p-2 px-3 w-[304px] rounded-[10px] select outline-0'>
                            <option value="" disabled selected hidden>Report Type</option>
                        </select>
                    </div>
                </section>

                <section className='flex flex-col items-start justify-start space-y-5 w-fit border-t-[3px] border-[#1EB53A] pt-4'>
                    <div className='flex flex-row flex-wrap  items-center justify-start '>
                        {data.map((resource) => (
                            <div className='text-white flex flex-col justify-end pl-5 pb-4 mr-[30px] mb-[30px]'
                                style={{
                                    backgroundImage: resource.backgroundImage,
                                    backgroundRepeat: "no-repeat", height: "334px", width: "270px",
                                    fontWeight: "800"
                                }}>
                                <span className='mb-7 text-[20px]'>{resource.title}</span>
                                <div className='flex flex-row space-x-2 mb-2'>
                                    <img src='/assets/pdfIcon.png' alt='' />
                                    <span>English</span>
                                    <span style={{ fontWeight: 300 }}>7.24mb</span>
                                </div>
                                <div className='flex flex-row space-x-2'>
                                    <img src='/assets/pdfIcon.png' alt='' />
                                    <span>French</span>
                                    <span style={{ fontWeight: 300 }}>7.24mb</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <nav aria-label="..." className='self-end mt-5'>
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <button className="page-link h-[100%] flex items-center justify-center" tabindex="-1"><AiOutlineDoubleLeft /></button>
                            </li>
                            <li className="page-item active"><a className="page-link">1</a></li>
                            <li className="page-item">
                                <a className="page-link">2</a>
                            </li>
                            <li className="page-item"><a className="page-link">3</a></li>
                            <li className="page-item"><a className="page-link">4</a></li>
                            <li className="page-item"><a className="page-link">5</a></li>
                            <li className="page-item"><a className="page-link">6</a></li>
                            <li className="page-item"><a className="page-link">7</a></li>
                            <li className="page-item"><a className="page-link">8</a></li>
                            <li className="page-item">
                                <button className="page-link h-[100%] flex items-center justify-center" ><AiOutlineDoubleRight /></button>
                            </li>
                        </ul>
                    </nav>
                </section>
            </div>

            <div className='mt-[80px] w-full'>
                <Footer />
            </div>
        </div>

    )
}

export default Resources