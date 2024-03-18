import { HashRouter, Routes, Route } from "react-router-dom";
import { ToDoFormLocalStorage } from "./Components/ToDoFormLocalStorage";

function App() {
  return (
    <main className=" w-full h-screen flex items-start justify-center bg-gradient-to-r from-slate-700 to-gray-500">
      <HashRouter basename="/ToDoApp">
        <Routes>
          <Route path="/" index element={<ToDoFormLocalStorage />} />
        </Routes>
      </HashRouter>
    </main>
  );
}

export default App;
