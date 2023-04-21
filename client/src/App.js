import { useEffect } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import {
  AboutIITISM,
  AboutNVCTI,
  AboutAdministration,
  Contact,
  Home,
  MainLayout,
  EventPage,
  AdminDashboard,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Labs from "./pages/labs/Labs";
import ScrollToTop from "./hooks/scroollToTop";
// AOS stylesheet and script
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <Routes>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route exact path="about">
              <Route exact path="iitism" element={<AboutIITISM />} />
              <Route exact index path="nvcti" element={<AboutNVCTI />} />
              <Route
                exact
                path="administration"
                element={<AboutAdministration />}
              />
            </Route>
            <Route exact path="contact">
              <Route index element={<Contact />} />
            </Route>

            <Route exact path="labs">
              <Route index element={<Labs lab="gamingAndAnimation" />} />
              <Route
                exact
                path="gaming-and-animation"
                element={<Labs lab="gamingAndAnimation" />}
              />
              <Route
                exact
                path="electronics-and-iot"
                element={<Labs lab="electronicsAndIot" />}
              />
              <Route
                exact
                path="mechanical-tools-and-rapid-prototyping"
                element={<Labs lab="mechanicalToolsAndRapidPrototyping" />}
              />
              <Route
                exact
                path="pouch-battery-cell-assembly"
                element={<Labs lab="pouchBatteryCellAssembly" />}
              />
              <Route
                exact
                path="robotics"
                element={<Labs lab="gamingAndAnimation" />}
              />
              {/* <Route exact path="projects" element={<Projects />} /> */}
            </Route>
            <Route exact path="events">
              <Route index element={<EventPage />} />
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        limit={1}
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
}

export default App;
