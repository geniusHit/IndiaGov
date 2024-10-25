import React from 'react'
import img10 from './pictures/usveep.jpg'
import img11 from './pictures/vhealth_id.jpg'
import img12 from './pictures/wquicklinks5.png'
import img13 from './pictures/xquicklinks2.png'
import img14 from './pictures/xquicklinks3.png'
import img15 from './pictures/xquicklinks6.png'
import img16 from './pictures/xwebcast-icon.png'

const Blog = ()=>{
    return (
        <>
            <div className='flex justify-center mt-[40px]'>
                <div>
                    <div className='flex justify-center text-[18px] font-semibold'>News Highlights</div>
                    <hr className='w-[450px] h-[3px] bg-gray-400' size="2"></hr>
                    <span className='inline-block bg-gray-400 text-white p-[5px] mt-[10px]'>News & Press Releases</span>
                    <div className='w-[450px] border-[1px] px-[14px] py-[20px]'>
                        <ul className='list-disc ml-[15px]'>
                            <li className='text-[14px]'>Shri Jayant Chaudhary addresses a zonal conference for jan...</li>
                            <li className='text-[14px] mt-[10px]'>PM interacts with eminent economists</li>
                            <li className='text-[14px] mt-[10px]'>Shri Nitin Gadkari dedicates to the nation 6-Lane access-...</li>
                            <li className='text-[14px] mt-[10px]'>The central government has constituted a committee to verify...</li>
                            <li className='text-[14px] mt-[10px]'>Indian seafarers to be Honored for Exceptional bravery a Sea...</li>
                            <li className='text-[14px] mt-[10px]'>MOC clears Multiple Proposals for Equipment of Paris-bound...</li>
                            <li className='text-[14px] mt-[10px]'>All is not well with the Indian political system and it is...</li>
                        </ul>

                        <button className='text-[13px] border-[1px] border-blue-600 mt-[16px]'>More News...</button>
                    </div>
                </div>

                <div className='ml-[30px]'>
                    <div className='flex justify-center text-[18px] font-semibold'>Most Requested Information & Forms</div>
                    <hr className='w-[450px] h-[3px] bg-gray-400' size="2"></hr>
                    <div className='w-[450px] h-[250px] mt-[10px]'>
                        <div className='h-[23px] bg-gray-200 px-[4px] box-border'><i class="fa-regular fa-message"></i> Information</div>
                        <div className='px-[14px] py-[20px] border-[1px]'>
                            <ul className='list-disc ml-[15px]'>
                                <li className='text-[14px]'>Punjab Backward Classes Land Development and Finance...</li>
                                <li className='text-[14px] mt-[10px]'>Website of Pandit Deendayal Upadhyaya Institute for the ...</li>
                                <li className='text-[14px] mt-[10px]'>Website of Rajiv Gandhi Centre for Biotechnology</li>
                                <li className='text-[14px] mt-[10px]'>Guidelines for financial assistance to authors under...</li>
                                <li className='text-[14px] mt-[10px]'>Website of Rajasthan Drugs and Pharmaceuticals Limited</li>
                                <li className='text-[14px] mt-[10px]'>Website of Metereological centre of Bhubaneshwar</li>
                                <li className='text-[14px] mt-[10px]'>Micro small and Medium Enterprises Development Institute of...</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='ml-[30px]'>
                    <div className='flex justify-center text-[18px] font-semibold'>Activities and Initiatives</div>
                    <hr className='w-[210px] h-[3px] bg-gray-400' size="2"></hr>
                    <div className='w-[210px] h-[190px] mt-[10px] border-[1px] px-[5px] py-[5px]'>
                        <img src={img10} className='w-[200px]'></img>
                        <span className='text-[13px]'>flagship program of the ECI for voter education, spreading voter awareness & promoting voter literacy in India</span>
                    </div>
                    <div className='w-[210px] h-[140px] mt-[10px] border-[1px] px-[5px] py-[5px]'>
                        <img src={img11} className='w-[200px]'></img>
                        <span className='text-[13px]'>
                            Health ID - Key to your Digital Healthcare Journey
                        </span>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center bg-blue-500 text-white mt-[20px]'>
                <div className='w-[1170px] flex'>
                    <div className='w-[400px] border-r-[1px] border-x-blue-400 py-[30px]'>
                        <h1 className='text-[26px] font-serif'>Be involved</h1>
                        collaborate, share and influence government policy<br/>

                        <span className='text-[14px] inline-block mt-[20px] cursor-pointer hover:underline'>Painting competition on the Theme Mission Life</span><br/>

                        <span className='text-[14px] inline-block mt-[20px] cursor-pointer hover:underline'>Discussion on Amendments in the MSMED Act 2006</span><br/>

                        <span className='text-[14px] inline-block mt-[20px] cursor-pointer hover:underline'>#Cheer4Bharat Paris Olympics Survey</span><br/>

                        <span className='text-[14px] inline-block mt-[20px] cursor-pointer hover:underline'>Tune into 111th Episode of Mann ki Baat by Prime Minister Narendra Modi on 30th...</span><br/>

                        <button className='text-[12px] mt-[10px] border-[1px] border-blue-300 px-[4px] py-[4px]'>View Details</button>
                    </div>

                    <div className='px-[50px] border-r-[1px] border-x-blue-400 py-[30px]'>
                        <h1 className='w-[400px] text-[23px] font-serif'>Spotlight</h1>

                        <ul className='list-disc ml-[17px] mt-[20px]'>
                            <li>Nipun Bharat</li>
                            <li>General Election Results, 2024</li>
                        </ul>

                        <button className='text-[12px] mt-[30px] border-[1px] border-blue-300 px-[4px] py-[4px]'>View all</button>

                        <h1 className='w-[400px] text-[23px] font-serif mt-[30px]'>Transparency</h1>
                        <span className='text-[15px] mt-[20px] inline-block'>Right To Information | Open Data | Public Grievance</span>
                    </div>

                    <div className='px-[50px] py-[30px]'>
                        <div className='ml-[17px] font-serif text-[15px] mt-[20px]'>
                            <i class="fa-regular fa-comment text-[22px] mr-[10px]"></i> Feedback<br/>
                        </div>

                        <div className='ml-[17px] font-serif text-[15px] mt-[50px]'>
                            <i class="fa-solid fa-phone text-[22px] mr-[10px]"></i> Contact Us<br/>
                        </div>

                        <div className='ml-[17px] font-serif text-[15px] mt-[50px]'>
                            <i class="fa-solid fa-share text-[22px] mr-[10px]"></i>Share this page<br/><br/>
                            <i class="fa-brands fa-facebook-f text-[22px] mr-[10px] ml-[20px]"></i> Facebook<br/><br/>
                            <i class="fa-brands fa-twitter text-[22px] mr-[10px] ml-[20px]"></i>Twitter
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='w-[1170px] flex justify-between items-center mt-[50px] mb-[20px]'>
                    <div className='w-[180px] h-[200px] flex flex-col items-center'>
                        <span><img src={img12} className='w-[70px]'></img></span>
                        <span className='text-center font-semibold text-[15px]'>Integrated Government Online Directory (iGOD)</span>
                        <span><hr className='w-[180px] mt-[6px]'></hr></span>
                        <span className='text-center text-[12px] text-gray-500 mt-[10px]'>A one-point source to access all Indian Government Websites at all levels and from all sectors.</span>
                    </div>

                    <div className='w-[180px] h-[200px] flex flex-col items-center'>
                        <span><img src={img13} className='w-[70px]'></img></span>
                        <span className='text-center font-semibold text-[15px]'>Mobile App Directory</span>
                        <span><hr className='w-[180px] mt-[6px]'></hr></span>
                        <span className='text-center text-[12px] text-gray-500 mt-[10px] capitalize'>Mobile Seva Appstore: National Mobile Governance Initiative by Dept. of Electronics & IT</span>
                    </div>

                    <div className='w-[180px] h-[200px] flex flex-col items-center'>
                        <span><img src={img14} className='w-[70px]'></img></span>
                        <span className='text-center font-semibold text-[15px]'>Calendar</span>
                        <span><hr className='w-[180px] mt-[6px]'></hr></span>
                        <span className='text-center text-[12px] text-gray-500 mt-[10px] capitalize'>View holidays as per the circular issued by the Ministry of Personnel, Public Grievances and Pensions.</span>
                    </div>

                    <div className='w-[180px] h-[200px] flex flex-col items-center'>
                        <span><img src={img15} className='w-[70px]'></img></span>
                        <span className='text-center font-semibold text-[15px]'>MyGov</span>
                        <span><hr className='w-[180px] mt-[6px]'></hr></span>
                        <span className='text-center text-[12px] text-gray-500 mt-[10px] capitalize'>Be an active partner in nation-building. Participate in Groups, Tasks, Discussions, Polls, Blogs and Talks.</span>
                    </div>

                    <div className='w-[180px] h-[200px] flex flex-col items-center'>
                        <span><img src={img16} className='w-[70px]'></img></span>
                        <span className='text-center font-semibold text-[15px]'>Webcast Services</span>
                        <span><hr className='w-[180px] mt-[6px]'></hr></span>
                        <span className='text-center text-[12px] text-gray-500 mt-[10px] capitalize'>View live and on demand Webcast of important Government events, activities and Live TV Channels</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog