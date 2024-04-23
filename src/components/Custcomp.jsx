import React from 'react'

const Custcomp = ({data}) => {
  return (
    <div>
   
   {/* overall div  */}
   {
    data.map((item)=>(
      <div className='flex items-center justify-between px-4 py-2 border-x-[1px] border-b-[1px] '>
        {/* customer name/email/... */}
        <div className='flex space-x-4 '>
            <input type="checkbox" className='w-4 h-4 mt-2' />
            <div className='flex flex-col space-y-1'>
              <p className='font-semibold'>{item.name}</p>
            <span><p className='text-sm text-slate-500'>{item.email}</p></span>
            <span><p className='text-sm text-slate-500'>{item.phone}</p></span>
            </div>
        </div>
        {/* ml-[3rem] */}
        {/* status/gender/... */}
        <div className='flex flex-col space-y-1'>
          <div className='rounded-2xl bg-green-600 px-2 py-1 text-white text-[12px] font-medium'>Active</div>
        <span><p className='text-sm text-slate-500'>{item.gender}</p></span>
        <span><p className='text-sm  text-slate-500'>{item.category}</p></span>
        </div>
        {/* revenue/order/count... */}
       
        {/*  */}
        <div className='flex space-x-4 md:w-[16rem] justify-between'>
            <div className='flex flex-col space-y-1'>
              <p className='font-semibold'>${item.balance}</p>
            <span><p className='text-sm text-slate-500'>{item.orders} Order(s)</p></span>
            <span><p className='text-sm text-slate-500'>{item.adresses} Address(s)</p></span>
            </div>

            <button className='text-red-500 underline'>Delete</button>
        </div>
    </div>
    ))
  
    
   }
</div>
  )
}

export default Custcomp