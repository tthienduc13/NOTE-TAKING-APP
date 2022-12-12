import React from "react";
import Heading from "../components/Heading";
import Sidebar from "../components/Sidebar";
import MarkedList from "../components/MarkedList";
function BookMarked({ noteList, functionSetNoteList }) {
  return (
    <>
      <Heading></Heading>
      <Sidebar></Sidebar>
      <MarkedList
        noteList={noteList}
        functionSetNoteList={functionSetNoteList}
      ></MarkedList>
    </>
  );
}

export default BookMarked;
