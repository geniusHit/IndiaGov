import React, { useRef, useEffect, useState } from 'react';
import img5 from './pictures/citizenship-portal.jpg';
import img6 from './pictures/nipun-bharat.jpg';
import img7 from './pictures/pm-suryaghar.jpg';
import img8 from './pictures/teacher-awards_0.jpg';
import img9 from './pictures/flYHd7E7b2W2XRtP.jpeg';

const ScrollBar = () => {
  const containerRef = useRef(null);
  let m = 0;
  var intervalId;
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    const scroll = () => {
      if(m>-6076)
        m -= (window.outerWidth-17);
      else if(m<=-6076)
        m=0
      if (containerRef.current) {
        containerRef.current.style = `transform: translateX(${m}px); transition-timing-function: ease-out; transition-duration: 0.5s;`;
      }
    };

    console.log(isPlaying)

    if(isPlaying==true)
      intervalId = setInterval(scroll, 3000);
    else if(isPlaying==false)
      clearInterval(intervalId)

    return () => clearInterval(intervalId);
  });

  var leftClick = ()=>{
    if(m>-6144)
      m -= (window.outerWidth-17);
    else if(m<=-6144)
      m=0

    if(containerRef.current) {
      containerRef.current.style = `transform: translateX(${m}px); transition-timing-function: ease-out; transition-duration: 0.5s;`;
    }
  }

  var rightClick = ()=>{
    if(m<0)
      m += (window.outerWidth-17);
    else if(m>=0)
      m=-6144

    if(containerRef.current) {
      containerRef.current.style = `transform: translateX(${m}px); transition-timing-function: ease-out; transition-duration: 0.5s;`;
    }
  }

  const pause = useRef(null)
  var stop = ()=>{
    if(isPlaying==true)
    {
      clearInterval(intervalId)
      setIsPlaying(false)
      pause.current.innerHTML="<i class='fa-solid fa-play'></i>"
    }
    else{
      setIsPlaying(true)
      pause.current.innerHTML="<i class='fa-solid fa-pause'></i>"
    }
  }

  return (
    <div className="h-[290px] overflow-hidden">
      <div className="flex" ref={containerRef}>
        <img src={img5} className="inline-block" />
        <img src={img6} className="inline-block" />
        <img src={img7} className="inline-block" />
        <img src={img8} className="inline-block" />
        <img src={img9} className="inline-block" />
      </div>

      <div className='z-4 absolute inline-block ml-[740px] -mt-[50px]'>
        <button className='text-[30px] text-white drop-shadow-lg' onClick={leftClick}><i class="fa-solid fa-chevron-left"></i></button>
        <button className='text-[30px] ml-[10px] text-white drop-shadow-lg' onClick={stop} ref={pause}><i class="fa-solid fa-pause"></i></button>
        <button className='text-[30px] ml-[10px] text-white drop-shadow-lg' onClick={rightClick}><i class="fa-solid fa-chevron-right"></i></button>
      </div>
    </div>
  );
};

export default ScrollBar;