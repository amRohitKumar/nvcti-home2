import "./App.css";
import Home from "./pages/home";
import { Navbar } from "./components";
import { AboutIITISM, AboutNVCTI, AboutAdministration, Contact } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about">
          <Route path="iitism" element={<AboutIITISM />} />
          <Route path="nvcti" element={<AboutNVCTI />} />
          <Route path="adminstration" element={<AboutAdministration />} />
        </Route>
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
