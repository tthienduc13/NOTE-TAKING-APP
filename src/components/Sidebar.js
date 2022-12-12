import React from "react";

function Sidebar() {
  return (
    <>
      <div className="h-screen fixed top-24 w-full  ">
        <div className="w-1/5 h-full border-r-[1px] border-[#cccc] ">
          {/* Videos */}
          <div className="h-[70px] w-full p-4 border-b-[1px] border-[#cccc] flex  items-center">
            <div className="text-[#FD83F8] text-lg px-2 py-4">
              <i class="fa-solid fa-circle"></i>
            </div>
            <div className="flex-grow ml-4">
              <p className="font-semibold text-xl">Videos</p>
            </div>
            <div className="w-[46px] h-[36px] bg-[#FD83F8] rounded-lg flex justify-center items-center">
              <p className="text-white font-semibold text-lg">07</p>
            </div>
          </div>
          {/* Videos */}
          {/* WishList */}
          <div className="h-[70px] w-full p-4 border-b-[1px] border-[#cccc] flex  items-center">
            <div className="text-[#FF9C54] text-lg px-2 py-4">
              <i class="fa-solid fa-circle"></i>
            </div>
            <div className="flex-grow ml-4">
              <p className="font-semibold text-xl">Wish Lists</p>
            </div>
            <div className="w-[46px] h-[36px] bg-[#FF9C54] rounded-lg flex justify-center items-center">
              <p className="text-white font-semibold text-lg">11</p>
            </div>
          </div>
          {/* WishList */}
          {/* Assignments */}
          <div className="h-[70px] w-full p-4 border-b-[1px] border-[#cccc] flex  items-center">
            <div className="text-[#364afd] text-lg px-2 py-4">
              <i class="fa-solid fa-circle"></i>
            </div>
            <div className="flex-grow ml-4">
              <p className="font-semibold text-xl">Assignments</p>
            </div>
            <div className="w-[46px] h-[36px] bg-[#364afd] rounded-lg flex justify-center items-center">
              <p className="text-white font-semibold text-lg">02</p>
            </div>
          </div>
          {/* Assignments */}
          {/* Projects */}
          <div className="h-[70px] w-full p-4 border-b-[1px] border-[#cccc] flex  items-center">
            <div className="text-[#37EBE0] text-lg px-2 py-4">
              <i class="fa-solid fa-circle"></i>
            </div>
            <div className="flex-grow ml-4">
              <p className="font-semibold text-xl">Projects</p>
            </div>
            <div className="w-[46px] h-[36px] bg-[#37EBE0] rounded-lg flex justify-center items-center">
              <p className="text-white font-semibold text-lg">05</p>
            </div>
          </div>
          {/* Projects */}
          {/* Work */}
          <div className="h-[70px] w-full p-4 border-b-[1px] border-[#cccc] flex  items-center">
            <div className="text-[#FB365A] text-lg px-2 py-4">
              <i class="fa-solid fa-circle"></i>
            </div>
            <div className="flex-grow ml-4">
              <p className="font-semibold text-xl">Work</p>
            </div>
            <div className="w-[46px] h-[36px] bg-[#FB365A] rounded-lg flex justify-center items-center">
              <p className="text-white font-semibold text-lg">01</p>
            </div>
          </div>
          {/* Work */}
          {/* Study */}
          <div className="h-[70px] w-full p-4 border-b-[1px] border-[#cccc] flex  items-center">
            <div className="text-[#FEB322] text-lg px-2 py-4">
              <i class="fa-solid fa-circle"></i>
            </div>
            <div className="flex-grow ml-4">
              <p className="font-semibold text-xl">Study</p>
            </div>
            <div className="w-[46px] h-[36px] bg-[#FEB322] rounded-lg flex justify-center items-center">
              <p className="text-white font-semibold text-lg">12</p>
            </div>
          </div>
          {/* Study */}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
