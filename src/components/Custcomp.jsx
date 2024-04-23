import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Qrcode from './qrcode'
import { UserContext } from '../App';
import { useContext } from 'react';
const Custcomp = () => {
  const [data, setData] = useState([]);
  // const [objectNeeded, setObjectNeeded] = useState({});
  const { setObjectNeeded } = useContext(UserContext);
  const [qrdata, setqrdata] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/v1/student');
      setData(res.data);
      
     
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const date = dateTime.toLocaleDateString();
    const time = dateTime.toLocaleTimeString();
    return `${date} ${time}`;
  };

  const handleAccept = async (id, obj) => {
    console.log(id);
    try {
      // setObjectNeeded(obj);
      // Remove the accepted item from the list
      const updatedData = data.filter(item => item._id !== id);
      setData(updatedData);

      alert('Request accepted successfully!');

      let objnew = obj 
      setObjectNeeded(objnew)
      setqrdata(objnew)
      console.log("me custcomp me hu",qrdata)

    } catch (error) {
      console.log(error); // Log the error for debugging
      alert('Failed to accept request. Please try again later.');
    }
  };

  const handleReject = async (id,obj) => {
    try {
      
      // Remove the rejected item from the list
      setData(data.filter(item => item._id !== id));
      alert('Request rejected successfully!');
    } catch (error) {
      console.log(error);
      alert('Failed to reject request. Please try again later.');
    }
  };

  return (
    <div>
      {/* overall div  */}
      {data.map((item) => (
        <div key={item._id} className='flex items-center justify-between px-4 py-2 border-x-[1px] border-b-[1px] '>
          {/* customer name/email/... */}
          <div className='flex space-x-4 '>
            <input type="checkbox" className='w-4 h-4 mt-2' />
            <div className='flex flex-col space-y-1'>
              <p className='font-semibold'>{item.name}</p>
              <span><p className='text-sm text-slate-500'>{item.semester} semester</p></span>
              <span><p className='text-sm text-slate-500'>{item.personalContact}</p></span>
            </div>
          </div>
          {/* status/gender/... */}
          <div className='flex flex-col space-y-1'>
            <span><p className='text-sm text-slate-500'>{item.purpose}</p></span>
            <span><p className='text-sm  text-slate-500'>{item.place}</p></span>
          </div>
          {/* revenue/order/count... */}
          <div className='flex space-x-4 md:w-[16rem] justify-between'>
            <div className='flex flex-col space-y-1'>
              <span><p className='text-sm text-slate-500'>In:- {formatDateTime(item.inDateTime)}</p></span>
              <span><p className='text-sm text-slate-500'>Out:- {formatDateTime(item.outDateTime)}</p></span>
            </div>
            <button className='rounded-2xl bg-green-600 px-2 py-1 text-white text-[12px] font-medium h-6' onClick={() => handleAccept(item._id,item)}>Accept</button>
            <button className='rounded-2xl bg-red-600 px-2 py-1 text-white text-[12px] font-medium h-6' onClick={() => handleReject(item._id,item)}>Reject</button>
          </div>
        </div>
      ))}{
        qrdata &&
        <Qrcode qrdata={qrdata} />

      }
    </div>
  );
};

export default Custcomp;
