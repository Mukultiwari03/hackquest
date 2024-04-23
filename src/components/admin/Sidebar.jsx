import React from 'react'
import { Link } from 'react-router-dom';
import { CgNotes } from "react-icons/cg";
import { HiOutlineUser } from "react-icons/hi2";
import { FiSettings } from "react-icons/fi";



const Sidebar = () => {
    const side = [
        {
            id:"10",
            icon:<CgNotes size={20}/>,
            title:<Link to="/QueryForm">Request a Query </Link>
        },
        {
            id:"4",
            icon:<HiOutlineUser size={20}/>,
            title:<Link to="/admin/privacy">Rules & Compliance</Link>
        },
        {
            id:"8",
            icon:<FiSettings size={20}/>,
            title:"Previous Queries"
        }
        // {
        //     id:"9",
        //     icon:<PiWrenchLight size={20}/>,
        //     title:"Configuration"
        // }
    ]
  return (
    <div className='h-screen shadow-md p-3 '>
        <div className=''>
            {
                side.map((item)=>{
                    return(
                        <div key={item.id} className='p-2 rounded-md text-black/65 font-medium my-2 flex gap-3 hover:bg-black/5'>
                            <div>{item.icon}</div>
                            <div>{item.title}</div>
                        </div>
                    )
                })
            }
            
        </div>
    </div>
  )
}

export default Sidebar