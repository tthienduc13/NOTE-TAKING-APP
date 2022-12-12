import React from "react";
import DoneList from "../components/DoneList";
import Heading from "../components/Heading";
import Sidebar from "../components/Sidebar";

function Done({ noteList, functionSetNoteList }) {
  return (
    <>
      <Heading></Heading>
      <Sidebar></Sidebar>
      <DoneList
        noteList={noteList}
        functionSetNoteList={functionSetNoteList}
      ></DoneList>
    </>
  );
}

export default Done;
