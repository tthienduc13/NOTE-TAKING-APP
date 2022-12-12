import { Route, Routes } from "react-router";
import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import AddNote from "./Pages/AddNote";
import BookMarked from "./Pages/BookMarked";
import Done from "./Pages/Done";
function App() {
  const [noteList, setNoteList] = useState(
    JSON.parse(localStorage.getItem("noteList")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("noteList", JSON.stringify(noteList));
  }, [noteList]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home noteList={noteList} functionSetNoteList={setNoteList}></Home>
          }
        />
        <Route
          path="/addnote"
          element={
            <AddNote
              setNoteList={(notes) => setNoteList([notes, ...noteList])}
            ></AddNote>
          }
        />
        <Route
          path="/bookmarked"
          element={
            <BookMarked
              noteList={noteList}
              functionSetNoteList={setNoteList}
            ></BookMarked>
          }
        />
        <Route
          path="/done-list"
          element={
            <Done noteList={noteList} functionSetNoteList={setNoteList}></Done>
          }
        />
      </Routes>
    </>
  );
}

export default App;
