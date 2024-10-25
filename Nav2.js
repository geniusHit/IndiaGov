import React, {useRef} from 'react'
import img1 from './pictures/1Ashoka_Chakra.png'

const Nav2 = ()=>{
  const headingRef = useRef(null)
  const topics = useRef(null)
  const tri = useRef(null)
  const tri2 = useRef(null)
  const mygovDiv = useRef(null)
  const mygovDrop = useRef(null)
  const handleClick = () => {
    if (headingRef.current.innerText==="▽") {
      headingRef.current.innerText="▷"
      topics.current.style = "display:none;"
      tri.current.style = "display:none;";
    }
    else{
      headingRef.current.innerText="▽"
      topics.current.style = "display:grid; grid-template-columns:auto auto auto; grid-row-gap:10px; grid-column-gap:40px;"
      tri.current.style = "display:inline-block;";
    }
  }

  const govDrop = ()=>{
    if(mygovDrop.current.innerText==="▽")
    {
      mygovDrop.current.innerText="▷"
      mygovDiv.current.style = "display:none;"
      tri2.current.style = "display:none;"
    }
    else
    {
      mygovDrop.current.innerText="▽"
      mygovDiv.current.style = "display:grid; grid-template-columns:auto auto auto; grid-row-gap:10px; grid-column-gap:40px;"
      tri2.current.style = "display:inline-block;"
    }
  }

  return (
    <>
      <nav className='h-[60px] bg-orange-600 flex items-center'>
        <span className='cursor-pointer hover:bg-orange-500 h-[60px] flex items-center w-[130px] ml-[20px]'>
          <img src={img1} className='w-[35px] ml-[10px] inline-block'></img>
          <font className="text-white inline-block ml-[7px] text-[17px]">Himayati</font>
        </span>

        <span className="text-white px-[10px] text-[17px] flex items-center h-[60px] cursor-pointer hover:bg-orange-500" onClick={handleClick}>
          <font className="inline-block px-[10px]"><i className="fa-solid fa-message"></i> Topics <font className="inline-block" id="arrow" ref={headingRef}>▷</font></font>
        </span>
        <div className='w-[0px] h-[0px] border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[12px] border-b-orange-600 absolute z-10 mt-[68px] ml-[205px] hidden' ref={tri}></div>
        <div className='hidden bg-orange-600 absolute ml-[150px] mt-[375px] text-white p-[20px] text-[13px] capitalize cursor-pointer z-10' ref={topics}>
          <span className='hover:underline'>Agriculture</span>
          <span className='hover:underline'>Art & Culture</span>
          <span className='hover:underline'>Commerce</span>
          <span className='hover:underline'>Communications & IT</span>
          <span className='hover:underline'>Defence</span>
          <span className='hover:underline'>Education</span>
          <span className='hover:underline'>Environment & Forest</span>
          <span className='hover:underline'>Finance & Taxes</span>
          <span className='hover:underline'>Food & Public Distribution</span>
          <span className='hover:underline'>foreign affairs</span>
          <span className='hover:underline'>Governance & Administration</span>
          <span className='hover:underline'>Health & Family Welfare</span>
          <span className='hover:underline'>Home Affairs & Enforcement</span>
          <span className='hover:underline'>Housing</span>
          <span className='hover:underline'>Industries</span>
          <span className='hover:underline'>Infrastructure</span>
          <span className='hover:underline'>information & broadcasting</span>
          <span className='hover:underline'>labour & employment</span>
          <span className='hover:underline'>law & justice</span>
          <span className='hover:underline'>power & energy</span>
          <span className='hover:underline'>rural</span>
          <span className='hover:underline'>science & technology</span>
          <span className='hover:underline'>social development</span>
          <span className='hover:underline'>transport</span>
          <span className='hover:underline'>travel & tourism</span>
          <span className='hover:underline'>youth & sports</span>
        </div>

        <span className="text-white ml-[13px] text-[17px] cursor-pointer hover:bg-orange-500 h-[60px] flex items-center">
          <font className="inline-block px-[10px]"><i class="fa-solid fa-gear"></i> Services</font>
        </span>

        <span className="text-white ml-[13px] text-[17px] cursor-pointer hover:bg-orange-500 h-[60px] flex items-center" onClick={govDrop}>
          <font className="inline-block px-[10px]"><i class="fa-solid fa-house"></i> My Govt <font ref={mygovDrop}>▷</font> </font>
        </span>
        <div className='w-[0px] h-[0px] border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[12px] border-b-orange-600 absolute z-10 mt-[68px] ml-[462px] hidden' ref={tri2}></div>
        <div className='hidden bg-orange-600 absolute ml-[406px] mt-[200px] text-white p-[20px] text-[13px] capitalize cursor-pointer z-10' ref={mygovDiv}>
          <span className='hover:underline'>Constituition of India</span>
          <span className='hover:underline'>Government Directory</span>
          <span className='hover:underline'>India Parliament</span>
          <span className='hover:underline'>Publications</span>
          <span className='hover:underline'>Who's Who</span>
          <span className='hover:underline'>Acts</span>
          <span className='hover:underline'>Schemes</span>
          <span className='hover:underline'>Documents</span>
        </div>

        <span className="text-white ml-[13px] text-[17px] cursor-pointer hover:bg-orange-500 h-[60px] flex items-center">
          <font className="inline-block px-[10px]"><i class="fa-solid fa-people-group"></i> People Groups</font>
        </span>

        <span className="text-white ml-[13px] text-[17px] cursor-pointer hover:bg-orange-500 h-[60px] flex items-center">
          <font className="inline-block px-[10px]"><i class="fa-regular fa-circle-dot"></i> India At A Glance</font>
        </span>
      </nav>
    </>
  )
}

export default Nav2