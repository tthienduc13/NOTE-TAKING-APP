import React from "react";
import { Link } from "react-router-dom";

function Heading() {
  return (
    <>
      <div className="w-full h-24 border-b-[1px] border-[#cccc] flex flex-row fixed z-10 bg-white">
        <div className="w-1/5 py-4 pl-[32px] ">
          <div className="w-full h-full flex flex-row  items-center gap-4">
            <div className="rounded-full h-[50px] w-[50px] border-[#37EBE0] border-2 p-[2px]">
              <img
                className="rounded-full h-full w-full"
                src={require("../assets/img/avatar.jpg")}
              ></img>
            </div>
            <p className="font-semibold text-lg">Davis Nguyen</p>
          </div>
        </div>
        <div className="w-4/5 flex flex-row justify-center items-center pr-[32px] ">
          <div className="flex-grow">
            <p className="font-semibold text-lg">All Notes</p>
          </div>
          <div className="flex flex-row gap-5">
            <div className="py-2">
              <i className="fa-solid fa-magnifying-glass text-lg"></i>
            </div>
            <div className="py-2">toogle</div>
            <div className="text-lg font-semibold px-4 py-2 bg-[#2bada5] rounded-lg">
              <Link to="/addnote">Add New Note</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Heading;
