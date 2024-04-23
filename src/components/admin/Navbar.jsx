import React from 'react'
// import { BsFillMoonStarsFill } from "react-icons/bs";
// import { PiStorefrontDuotone } from "react-icons/pi";
// import { FaRegBell } from "react-icons/fa";
const Navbar = () => {
  return (
    
    <nav className='bg-white shadow-md border-b-2 sticky top-0 z-[2]'>
     <div className='p-3'>
         <div className='flex justify-between items-center'>
             <div className='flex items-center'>
                 <div className='inline-block me-3 my-auto'>
                     <p className='font-bold'>Admin Panel </p>
                 </div>
                 {/* <div className='inline-block'>
                     <input type="text" placeholder='type of notice' className='placeholder-slate-400 placeholder:font-semibold border-[1px] w-[500px] rounded-md p-2' />
                 </div> */}
             </div>
             <div className='flex items-center gap-2 text-black/60'>
                 {/* <div className='p-2 rounded-md hover:bg-black/5'><BsFillMoonStarsFill size={20}/></div>
                 <div className='p-2 rounded-md hover:bg-black/5'><PiStorefrontDuotone size={25}/></div>
                 <div className='p-2 rounded-md hover:bg-black/5'><FaRegBell size={23}/></div> */}
                 <div>Hey Admin </div>
                 <div className='w-10 h-10 rounded-full bg-blue-400 text-center text-white flex items-center justify-center'>ST</div>
             </div>
         </div>
     </div>
    </nav>
  )
}

export default Navbar