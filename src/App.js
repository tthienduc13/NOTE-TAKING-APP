import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import AddNote from "./Pages/AddNote";
import { useState, useEffect } from "react";
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
          path="/home"
          element={
            <Home noteList={noteList} functionSetNoteList={setNoteList}></Home>
          }
        />
        <Route
          path="/addnote"
          element={
            <AddNote
              setNoteList={(notes) => setNoteList([...noteList, notes])}
            ></AddNote>
          }
        />
      </Routes>
    </>
  );
}

export default App;
