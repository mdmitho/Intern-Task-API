
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Accordion from "./Components/Accordion/Accordion";
// import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div className="App">
    
      <Nav></Nav>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="accordion" element={<Accordion />} />
      </Routes>
    </div>
  );
}

export default App;
