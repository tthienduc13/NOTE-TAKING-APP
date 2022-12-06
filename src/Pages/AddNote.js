import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function AddNote({ setNoteList }) {
  const [newNote, setNewNote] = useState({
    id: 0,
    title: "",
    content: "",
    tag: "",
    isChecked: false,
    isMarked: false,
  });
  const navigate = useNavigate();
  const handleSubmit = () => {
    newNote.id++;
    setNoteList(newNote);
    navigate("/home");
  };
  return (
    <>
      <div className="h-screen w-screen flex bg-[#F5F5F5] justify-center items-center">
        <div className="h-1/2 w-1/2 bg-white rounded-xl flex flex-col py-4 px-6 ">
          <div className="p-4 border-b-2">
            <h2 className="w-full text-center text-3xl font-semibold">
              Create New Note
            </h2>
          </div>
          <div>
            <div className="mt-4 font-semibold text-xl italic underline">
              Title here:
            </div>
            <div className="flex flex-row mt-2 justify-between">
              <input
                className="w-[calc(75%-15px)] outline-none border-black border-2 text-2xl rounded-lg p-2"
                onChange={(e) =>
                  setNewNote({
                    ...newNote,
                    title: e.target.value,
                  })
                }
              ></input>
              <div className="w-[calc(25%-15px)] flex justify-center items-center rounded-lg text-white font-semibold text-2xl">
                <i className="fa-solid fa-tag mr-2 text-black"></i>
                <select
                  placeholder="text"
                  className="bg-[#088f86] outline-none rounded-lg p-2"
                >
                  <option></option>
                  <option>Videos</option>
                  <option>Wish List</option>
                  <option>Assignment</option>
                  <option>Projects</option>
                  <option>Work</option>
                  <option>Study</option>
                </select>
              </div>
            </div>
            <div className="py-4 border-b-2">
              <div className=" font-semibold text-xl italic underline ">
                Note here:
              </div>
              <textarea
                rows="5"
                wrap="soft"
                cols="100"
                className="w-full mt-4 border-black border-2 rounded-lg p-2"
                onChange={(e) =>
                  setNewNote({
                    ...newNote,
                    content: e.target.value,
                  })
                }
              ></textarea>
            </div>
          </div>
          <button
            className="bg-[#088f86] mt-2 py-4 text-2xl text-white font-semibold rounded-lg hover:opacity-80"
            onClick={handleSubmit}
          >
            Add Note
          </button>
        </div>
      </div>
    </>
  );
}

export default AddNote;
