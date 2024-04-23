import React from "react";
import Custcomp from "../components/Custcomp";
const Aadmin = () => {
  return (
    <div>
      <div className="mt-4 flex items-center justify-between px-4 py-2 border-[1px] rounded-sm">
        <div className="flex space-x-4 items-center">
          <input type="checkbox" className="w-4 h-4" />
          <span>
            <p className="text-sm  text-slate-500 ">
              Customer Name / Email / Contact Number
            </p>
          </span>
        </div>
        <div>
          <span>
            <p className="text-sm  text-slate-500 mr-[2.75rem]">
              Status / Gender / Group
            </p>
          </span>
        </div>
        <div>
          <span>
            <p className="text-sm text-slate-500">
              Revenue / Order / Count / Address Count
            </p>
          </span>
        </div>
      </div>

      <Custcomp />
    </div>
  );
};

export default Aadmin;
