import React, {useRef} from 'react'
import img2 from './pictures/2government-of-india.jpg'
import img3 from './pictures/3Digital_India_logo.svg.png'

const Nav1 = ()=>{
  return (
    <>
      <nav className='flex items-center p-[20px]'>
        <img src={img2} className='w-[80px] inline-block'></img>
        <div className="text-[20px] inline-block w-[250px] p-[20px]">Goverment Of India <br/>
        <font className="text-blue-700">National Portal Of India</font></div>
        <img src={img3} className='w-[80px] mt-[20px] float-right inline-block ml-auto'></img>
      </nav>
    </>
  )
}

export default Nav1