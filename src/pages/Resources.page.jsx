import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { MdKeyboardArrowDown } from "react-icons/md"
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai"
import { Footer } from '../components'

const Resources = () => {
    return (
        <div>
            <div className='px-20'>
                <section className='pt-[80px]'>
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
                            fontSize: "64px",
                            height: "334px",
                            width: "100%",
                        }}>
                        <span className='text-white'>RESOURCES</span>
                    </div>
                    <div className='space-x-3  mb-5 mt-10'>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<MdKeyboardArrowDown />}
                                className="bg-[#D9D9D9] p-2 rounded-lg mt-5 text-[18px] w-[304px] text-start">
                                <span className="ml-2"> Publication Date </span>
                            </MenuButton>
                            <MenuList className='bg-[#D9D9D9] w-[304px] flex flex-col space-y-1 px-2 py-1'>
                                <MenuItem>Download</MenuItem>
                                <MenuItem>Create a Copy</MenuItem>
                                <MenuItem>Mark as Draft</MenuItem>
                                <MenuItem>Delete</MenuItem>
                                <MenuItem>Attend a Workshop</MenuItem>
                            </MenuList>
                        </Menu>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<MdKeyboardArrowDown />}
                                className="bg-[#D9D9D9] p-2 rounded-lg mt-5 text-[18px] w-[304px] text-start">
                                <span className="ml-2"> Monitoring Category </span>
                            </MenuButton>
                            <MenuList className='bg-[#D9D9D9] w-[304px] flex flex-col space-y-1 px-2 py-1'>
                                <MenuItem>Download</MenuItem>
                                <MenuItem>Create a Copy</MenuItem>
                                <MenuItem>Mark as Draft</MenuItem>
                                <MenuItem>Delete</MenuItem>
                                <MenuItem>Attend a Workshop</MenuItem>
                            </MenuList>
                        </Menu>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<MdKeyboardArrowDown />}
                                className="bg-[#D9D9D9] p-2 rounded-lg mt-5 text-[18px] w-[304px] text-start">
                                <span className="ml-2"> Report Type </span>
                            </MenuButton>
                            <MenuList className='bg-[#D9D9D9] w-[304px] flex flex-col space-y-1 px-2 py-1'>
                                <MenuItem>Download</MenuItem>
                                <MenuItem>Create a Copy</MenuItem>
                                <MenuItem>Mark as Draft</MenuItem>
                                <MenuItem>Delete</MenuItem>
                                <MenuItem>Attend a Workshop</MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                </section>

                <section className='flex flex-col items-start justify-start space-y-5 w-fit border-t-[3px] border-[#1EB53A] pt-4'>
                    {["", "", ""].map((resource) => (
                        <div className='flex flex-row items-center justify-center space-x-10'>
                            <div className='text-white flex flex-col justify-end pl-5 pb-4'
                                style={{
                                    backgroundImage: "url('/assets/Feature1.png')",
                                    backgroundRepeat: "no-repeat", height: "334px", width: "270px",
                                    fontWeight: "800"
                                }}>
                                <span className='mb-7 text-[20px]'>Drinking water and hygiene in Africa</span>
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
                            <div className='text-white flex flex-col justify-end pl-5 pb-4'
                                style={{
                                    backgroundImage: "url('/assets/Feature2.png')",
                                    backgroundRepeat: "no-repeat", height: "334px", width: "270px",
                                    fontWeight: "800"
                                }}>
                                <span className='mb-7 text-[20px]'>
                                    Training on drinking water, sanitation and hygiene in Africa
                                </span>
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
                            <div className='text-white flex flex-col justify-end pl-5 pb-4'
                                style={{
                                    backgroundImage: "url('/assets/Feature3.png')",
                                    backgroundRepeat: "no-repeat", height: "334px", width: "270px",
                                    fontWeight: "800"
                                }}>
                                <span className='mb-7 text-[20px]'>
                                    Progress on drinking water, sanitation and hygiene in Africa
                                </span>
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
                            <div className='text-white flex flex-col justify-end pl-5 pb-4'
                                style={{
                                    backgroundImage: "url('/assets/Feature4.png')",
                                    backgroundRepeat: "no-repeat", height: "334px", width: "270px",
                                    fontWeight: "800"
                                }}>
                                <span className='mb-7 text-[20px]'>
                                    Water, sanitation and hygiene in Africa
                                </span>
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
                        </div>
                    ))}
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