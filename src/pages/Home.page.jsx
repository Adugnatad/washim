import React from 'react'
import { Footer } from '../components'

const Home = () => {
    return (
        <div>
            <section className='flex flex-col justify-end text-white bg-homepage h-[600px] py-10 pl-[70px] '>
                <h1 className='w-[90%] mb-3 font-bold text-[40px] md:text-[50px]'>Tracking every drop of water <br /> <span className='border-b-[5px] border-b-[#1EB53A]'>and utility investment.</span></h1>
                <p className='w-[80%] text-[20px] md:text-[25px]'>WASHIMS is an Innovative smart approach to water and utility management  focused largely on automation, real-time view of hydraulic data and better data management.</p>
            </section>

            <section className='flex flex-col md:flex-row items-center justify-between bg-gradient-to-r  from-[#0082CE] to-[#004172] p-10 md:px-[70px] md:my-10  md:mx-20'>
                <div className='flex flex-row flex-wrap justify-center md:w-[354px] mr-5'>
                    <div className=' flex flex-col items-center justify-center w-fit mb-3 mr-3'>
                        <span className='bg-white rounded-[10px] w-[106px] h-[105px] flex items-center justify-center'>  <img src='/assets/communitiesIcon.png' alt='' /> </span>
                        <span className='text-white text-[12px]'>COMMUNITIES</span>
                    </div>
                    <div className=' flex flex-col items-center justify-center w-fit mb-3 mr-3'>
                        <span className='bg-white rounded-[10px] w-[106px] h-[105px] flex items-center justify-center'>   <img src='/assets/waterIcon.png' alt='' /></span>
                        <span className='text-white text-[12px]'>WATER POINTS</span>
                    </div>
                    <div className=' flex flex-col items-center justify-center w-fit mb-3 mr-3'>
                        <span className='bg-white rounded-[10px] w-[106px] h-[105px] flex items-center justify-center'>  <img src='/assets/schoolIcon.png' alt='' /> </span>
                        <span className='text-white text-[12px]'>SCHOOLS</span>
                    </div>
                    <div className=' flex flex-col items-center justify-center w-fit mb-3 mr-3'>
                        <span className='bg-white rounded-[10px] w-[106px] h-[105px] flex items-center justify-center'>   <img src='/assets/laterineIcon.png' alt='' /></span>
                        <span className='text-white text-[12px]'>LATRINES</span>
                    </div>
                    <div className=' flex flex-col items-center justify-center w-fit mb-3 mr-3'>
                        <span className='bg-white rounded-[10px] w-[106px] h-[105px] flex items-center justify-center'>   <img src='/assets/healthIcon.png' alt='' /></span>
                        <span className='text-white text-[12px]'>HEALTH FACILITIES</span>
                    </div>
                </div>
                <div className='max-w-[400px] text-[25px] text-white flex flex-col items-start space-y-5'>
                    <p className=' font-medium'>
                        Improving data management and availability of
                        information in the sector towards improving
                        access to quality and sustainable WASH services
                        in Sierra Leone.
                    </p>
                    <div className='flex flex-row items-center justify-center w-[100%]'>
                        <img src='/assets/searchIcon.png' alt='' className='bg-white p-3 pl-4 h-[50px]' />
                        <input type='text' placeholder="Search WASHIMS DATA" className="p-3 h-[50px] w-[90%] text-[15px] outline-0 text-[#000]" />
                    </div>
                    <button className='text-white bg-gradient-to-b  from-[#23C641] to-[#1B882F] p-1 px-10 rounded-[1000px] w-[110px] self-end  hover:bg-green-400 hover:ease-in duration-200 hover:bg-none'>Search</button>
                </div>
            </section>

            <section className='flex flex-col cu:flex-row items-center justify-center bg-[#F6F6F6] p-0'>
                <img src="/assets/womanFetchingWater.png" alt="" style={{ width: "500px" }} />
                <div className='cu:w-[50%] p-[80px] md:p-[100px] '>
                    <h1 className='text-[23px] md:text-[28px] font-bold '>
                        Updated National estimates for WASH
                        in households: the Country is off track for SDG WASH targets
                    </h1>
                    <p className='mt-7 mb-2 md:text-[18px]'>
                        Updated country, regional and Communities estimates are now available for the period 2000 to 2020. Achieving universal coverage by 2030 will require a quadrupling of current rates of progress in safely managed drinking water, safely managed sanitation, and basic hygiene services.
                    </p>
                    <p className='md:text-[18px]'>
                        WASHIMS will provide reliable and affordable water and sanitation data which compliant with regulatory standards and ensure that operations and assets are sustainable.
                    </p>
                </div>
            </section>

            <section className='flex flex-col items-center justify-center py-10'>
                <h1 className='text-[36px] font-medium mb-10'>Featured Resources</h1>
                <div className='flex flex-row items-end justify-center space-y-3 space-x-3 flex-wrap'>
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
            </section>

            <section className='flex flex-col md:flex-row items-center justify-around bg-gradient-to-r  from-[#0082CE] to-[#004172] py-10 px-15'>
                <div className='w-[80%] mb-5 md:mb-0 md:w-[30%] text-white font-medium text-[24px]'>
                    Subscribe to our mailing list and get
                    access to updated data directly into your
                    inbox.
                </div>
                <div className='flex flex-row items-center justify-center'>
                    <img src='/assets/searchIcon.png' alt='' className='bg-white p-3 pl-4 h-[50px]' />
                    <input type='text' placeholder="Search WASHIMS DATA" className="p-3 h-[50px] w-[90%] text-[15px] outline-0" />
                    <button className='h-[50px] bg-gradient-to-b from-[#23C641] to-[#1B882F] text-white p-3'>SUBSCRIBE</button>
                </div>
            </section>

            <section className='bg-[#003256] md:px-20  pb-10 text-white '>
                <div className='bg-[#799DB2] p-10 flex flex-row flex-wrap space-y-4 space-x-1 items-start justify-between'>
                    <div className='flex flex-col items-start'>
                        <span className='font-bold text-[22px]'> DATA</span>
                        <ul className='list-disc ml-6 text-[15px] font-medium'>
                            <li>Communities</li>
                            <li>Water Points</li>
                            <li>Latrines</li>
                            <li>Schools</li>
                            <li>Health Facilities</li>
                            <li>Public Places</li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-start'>
                        <span className='font-bold text-[22px]'> RESOURCES</span>
                        <ul className='list-disc ml-6 text-[15px] font-medium'>
                            <li>Publications</li>
                            <li>Videos</li>
                            <li>Pictures</li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-start'>
                        <span className='font-bold text-[22px]'> LAMs</span>
                        <ul className='list-disc ml-6 text-[15px] font-medium'>
                            <li>LAMs Directory</li>
                            <li>LAMs Distribution</li>
                        </ul>
                    </div>
                    <div className='flex flex-col items-start'>
                        <span className='font-bold text-[22px] break-all'> APPLICATIONS/DASHBOARD</span>
                        <ul className='list-disc ml-6 text-[15px] font-medium'>
                            <li>WASHNorm</li>
                            <li>Trends Analysis</li>
                        </ul>
                    </div>
                </div>
                <div className='mt-[80px]'>
                    <Footer />
                </div>
            </section>
        </div>
    )
}

export default Home