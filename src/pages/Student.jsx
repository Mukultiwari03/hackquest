import React from "react";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Student = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 sticky ">
        <div className=" col-span-2 hidden lg:block">
          <aside className="sticky top-[70px] x-[3]">
            <Sidebar />
          </aside>
        </div>

        <div className=" col-span-12 lg:col-span-10  z-[-1]">
          {/* <Main/> */}
        </div>
      </div>
    </div>
  );
};

export default Student;
