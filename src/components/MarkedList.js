import React from "react";

function MarkedList({ noteList, functionSetNoteList }) {
  let markedItems = noteList.filter((item) => item.isMarked === true);
  return (
    <>
      <div className="absolute top-24  w-full h-screen  flex flex-row z-0">
        <div className=" w-4/5  px-6 py-10 absolute right-0">
          <div className=" w-full  flex h-fit flex-wrap gap-[60px] items-stretch ">
            {/* MarkedTask */}
            {markedItems.map((item, index) => (
              <div className="w-[calc(50%-30px)] h-fit  bg-[#f5d8dd] rounded-xl overflow-hidden ">
                <div className="px-6 py-4 flex flex-col ">
                  <div className="w-full flex flex-row py-2 justify-center items-center">
                    <h2 className="text-2xl font-semibold flex-grow">
                      {item.title}
                    </h2>
                    <div className=" bg-[#f84b6b] rounded-lg flex justify-center items-center px-4 py-2 cursor-pointer  hover:scale-110">
                      <p className="text-white font-semibold ">{item.tag}</p>
                    </div>
                  </div>
                  <p className="text-justify mb-1 ">{item.content}</p>
                  <div className="pb-2 pt-4 flex flex-row font-semibold">
                    <div className="flex-grow">09:38PM</div>
                    <div>07 JANUARY 2023</div>
                  </div>
                </div>
                <div className="w-full flex flex-row ">
                  <button className="w-full text-center">
                    <div className=" text-2xl p-2 bg-yellow-500">
                      <i className="fa-solid fa-star hover:scale-125 cursor-pointer duration-300"></i>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MarkedList;
