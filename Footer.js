import React from 'react'

const Footer = ()=>{
    return (
        <>
            <div className=''>
                <div className='bg-[#5c5c5c] rgb(92, 92, 92] h-[25px] flex justify-center'>
                    <div className='w-[1170px] flex items-center'>
                        <span className='text-[14px] text-white h-[18px] pr-[15px] border-r-[1px] border-black flex items-center'>About us</span>

                        <span className='text-[14px] text-white h-[18px] px-[15px] border-r-[1px] border-black flex items-center'>Contact us</span>

                        <span className='text-[14px] text-white h-[18px] px-[15px] border-r-[1px] border-black flex items-center'>Feedback</span>

                        <span className='text-[14px] text-white h-[18px] px-[15px] border-r-[1px] border-black flex items-center'>Visitor Summary</span>

                        <span className='text-[14px] text-white h-[18px] px-[15px] border-r-[1px] border-black flex items-center'>Help</span>

                        <span className='text-[14px] text-white h-[18px] px-[15px] border-r-[1px] border-black flex items-center'>Link to Us</span>

                        <span className='text-[14px] text-white h-[18px] px-[15px] border-r-[1px] border-black flex items-center'>Newsletter</span>

                        <span className='text-[14px] text-white h-[18px] px-[15px] border-r-[1px] border-black flex items-center'>Tell a friend</span>

                        <span className='text-[14px] text-white h-[18px] px-[15px] border-r-[1px] border-black flex items-center'>Website-policy</span>

                        <span className='text-[14px] text-white h-[18px] px-[15px] border-r-[1px] border-black flex items-center'>Sitemap</span>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className='w-[1170px]'>
                        <div className='grid grid-cols-3 gap-40 w-[400px]'>
                            <span>Information Related To</span>
                            <span></span>
                            <span>About the Government</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer