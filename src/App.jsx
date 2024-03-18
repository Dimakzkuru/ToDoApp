import { Routes, Route } from "react-router-dom";
import { ToDoFormLocalStorage } from "./Components/ToDoFormLocalStorage";

function App() {
  return (
    <main className=" w-full h-screen flex items-start justify-center bg-gradient-to-r from-slate-700 to-gray-500">
      <Routes>
        <Route path="/" index element={<ToDoFormLocalStorage />} />
      </Routes>
    </main>
  );
}

export default App;
