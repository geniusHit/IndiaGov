import React from 'react'

const Nav3 = ()=>{
    return (
        <>
            <nav className='bg-blue-700 h-[60px] flex items-center'>
                <form>
                    <input type='text' className='w-[270px] h-[40px] border-none px-[3px] py-[3px] outline-none ml-[30px] inline-block'></input>
                    <button className='text-white bg-yellow-400 h-[40px] border-none inline-block px-[15px] -mt-2 ml-[0px]'>Search</button>
                </form>

                <span className='text-white ml-[810px] w-[50px] inline-block'>Most Searched</span>
                <span className='text-white text-[12px] ml-[50px]'>Birth Certificate | Driving License | Pan card</span>
            </nav>
        </>
    )
}

export default Nav3