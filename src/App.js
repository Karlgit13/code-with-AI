import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import ArrayMetoder from "./components/ArrayMetoder";
import ObjektMetoder from "./components/ObjektMetoder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/array" element={<ArrayMetoder />} />
      <Route path="/object" element={<ObjektMetoder />} />
    </Routes>
  );
}

export default App;
