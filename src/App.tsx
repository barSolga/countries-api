import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Country from "./routes/Country";
import Home from "./routes/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/country/:id" element={<Country/>} />
      </Routes>
    </>
  );
}

export default App;
