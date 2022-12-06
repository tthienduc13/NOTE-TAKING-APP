import React from "react";

function Tasks({
  info,
  index,
  functionChecked,
  functionMarked,
  functionDelete,
}) {
  return (
    <>
      <div className="w-[calc(50%-30px)] h-fit  bg-[#f5d8dd] rounded-xl overflow-hidden ">
        <div className="px-6 py-4 flex flex-col ">
          <div className="w-full flex flex-row py-2 justify-center items-center">
            <h2 className="text-2xl font-semibold flex-grow">{info.title}</h2>
            <div className=" bg-[#f84b6b] rounded-lg flex justify-center items-center px-4 py-2 cursor-pointer  hover:scale-110">
              <p className="text-white font-semibold ">{info.tag}</p>
            </div>
          </div>
          <p className="text-justify mb-1 min-h-[170px]">{info.content}</p>
          {/* <div className="pb-2 pt-4 flex flex-row font-semibold">
            <div className="flex-grow">09:38PM</div>
            <div>07 JANUARY 2023</div>
          </div> */}
        </div>
        {/* Navbar */}
        <div className="w-full flex flex-row ">
          <button
            className="w-1/3 text-center"
            onClick={() => functionChecked(index)}
          >
            {info.isChecked === true ? (
              <div className=" text-green-500 text-2xl p-2 bg-[#f5d8dd]">
                <i className="fa-solid fa-check hover:scale-125 cursor-pointer duration-300"></i>
              </div>
            ) : (
              <div className=" text-white text-2xl p-2 bg-green-500">
                <i className="fa-solid fa-check hover:scale-125 cursor-pointer duration-300"></i>
              </div>
            )}
          </button>
          <button
            className="w-1/3 text-center"
            onClick={() => functionMarked(index)}
          >
            {info.isMarked === true ? (
              <div className="text-yellow-500 text-2xl p-2 bg-[#f5d8dd]">
                <i className="fa-solid fa-star hover:scale-125 cursor-pointer duration-300"></i>
              </div>
            ) : (
              <div className="text-white text-2xl p-2 bg-yellow-500">
                <i className="fa-solid fa-star hover:scale-125 cursor-pointer duration-300"></i>
              </div>
            )}
          </button>
          <button
            className="w-1/3 text-center text-white text-2xl p-2 bg-red-500"
            onClick={() => functionDelete(index)}
          >
            <i className="fa-solid fa-trash hover:scale-125 cursor-pointer duration-300"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Tasks;
