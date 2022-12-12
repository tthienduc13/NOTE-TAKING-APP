import React from "react";
import Tasks from "./Tasks";

function Main({ noteList, functionSetNoteList }) {
  const handleChecked = (index) => {
    functionSetNoteList(
      noteList.map((note, id) => {
        if (id === index) {
          return note.isChecked === false
            ? { ...note, isChecked: true }
            : { ...note, isChecked: false };
        } else {
          return note;
        }
      })
    );
  };
  const handleMarked = (index) => {
    functionSetNoteList(
      noteList.map((note, id) => {
        if (id === index) {
          return note.isMarked === false
            ? { ...note, isMarked: true }
            : { ...note, isMarked: false };
        } else {
          return note;
        }
      })
    );
  };
  const handleDelete = (index) => {
    const newNoteList = noteList.filter((task, id) => id !== index);
    functionSetNoteList(newNoteList);
  };
  return (
    <>
      <div className="absolute top-24  w-full h-screen  flex flex-row z-0">
        <div className=" w-4/5  px-6 py-10 absolute right-0">
          <div className=" w-full  flex h-fit flex-wrap gap-[60px] items-stretch ">
            {noteList.map((note, index) => (
              <Tasks
                info={note}
                index={index}
                functionChecked={() => handleChecked(index)}
                functionMarked={() => handleMarked(index)}
                functionDelete={() => handleDelete(index)}
              ></Tasks>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
