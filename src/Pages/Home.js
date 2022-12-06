import React from "react";
import Main from "../components/Main";
import Heading from "../components/Heading";
import Sidebar from "../components/Sidebar";

function Home({ noteList, functionSetNoteList }) {
  return (
    <>
      <Heading></Heading>
      <Sidebar></Sidebar>
      <Main
        noteList={noteList}
        functionSetNoteList={functionSetNoteList}
      ></Main>
    </>
  );
}

export default Home;
