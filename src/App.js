import "./App.css";
import Home from "./pages/home";
import { AboutIITISM } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about">
          <Route path="iitism" element={<AboutIITISM />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
