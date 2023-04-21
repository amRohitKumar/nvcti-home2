import { useEffect, useState } from "react";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";

import {
  Divider,
  Link,
  Box,
  IconButton,
  Container,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";

import NVCTILogo from "../../assets/nvcti-transparent.png";
import G20Logo from "../../assets/g20logo.jpg";
import IITISMLogo from "../../assets/iitism.png";

import { ModifiedDrawer, ModifiendAppBar } from "./style";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("true");
  const [openAbout, setOpenAbout] = useState(false);
  const [openLabs, setOpenLabs] = useState(false);
  const [openAboutSmall, setOpenAboutSmall] = useState(false);
  const [openLabsSmall, setOpenLabsSmall] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setOpenDrawer(false);
  }, [location.pathname]);

  useEffect(() => {
    const id = window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", id);
    };
  }, []);

  const handleScroll = () => {
    let bottom = window.pageYOffset;
    if (window.innerWidth < 800) {
      setActive("false");
      return;
    }
    if (bottom < 500) {
      setActive("true");
    } else {
      setActive("false");
    }
  };
  console.log(active);
  let inputStyles = {
    position: "absolute",
    top: 0,
    left: 20,
    backgroundColor: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    opacity: active ? 1 : 0,
  };
  return (
    <ModifiendAppBar id="navbar">
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          px: "0 !important",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO BOX */}
        <Box>
          <div className="logo-div">
            <Box sx={{ ml: active === "true" ? "6em" : 0 }}></Box>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 20,
                backgroundColor: "#fff",
                padding: "0.5rem 1rem",
                borderRadius: "5px",
                opacity: active === "true" ? 1 : 0,
                transition: "all 500ms linear",
              }}
            >
              <img className="large-logo-img" src={NVCTILogo} alt="NVCTI" />
            </Box>
            <Box to="/" component={NavLink}>
              <img className="logo-img" src={NVCTILogo} alt="NVCTI" />
            </Box>
            {/* <Box to="/" component={NavLink}>
              <img className="logo-img" src={NVCTILogo} alt="NVCTI" />
            </Box> */}
            <Divider
              className="breakpont-hidden"
              orientation="vertical"
              flexItem
            />
            <NavLink to="/about/iitism">
              <img
                className="logo-img breakpont-hidden"
                src={IITISMLogo}
                alt="IIT ISM"
              />
            </NavLink>
            <Divider
              className="breakpont-hidden"
              orientation="vertical"
              flexItem
            />
            <img
              className="logo-img breakpont-hidden"
              src={G20Logo}
              alt="G20"
            />
          </div>
          <div></div>
        </Box>
        {/* LINKS BOX */}
        <Box sx={{ marginLeft: "auto", mr: "1rem" }}>
          {/* SMALL SCREEN NAVBAR */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setOpenDrawer(!openDrawer)}
              sx={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <ModifiedDrawer
              anchor="right"
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
            >
              <Button
                component="span"
                sx={{ width: "max-content", marginLeft: "auto", mt: "1rem" }}
                size="large"
              >
                <CloseIcon onClick={() => setOpenDrawer(false)} />
              </Button>
              {/* DRAWER CONTENT */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                    my: "2rem",
                  }}
                  component="nav"
                  aria-labelledby="navbar"
                >
                  <ListItemButton component={NavLink} to="/">
                    <ListItemText primary="Home" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ my: "1rem" }}
                    onClick={() => setOpenAboutSmall(!openAboutSmall)}
                  >
                    <ListItemText primary="About" />
                    {openAboutSmall ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openAboutSmall} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton
                        component={NavLink}
                        to="/about/nvcti"
                        sx={{ pl: 4 }}
                      >
                        <ListItemText primary="About NVCTI" />
                      </ListItemButton>
                      <ListItemButton
                        component={NavLink}
                        to="/about/iitism"
                        sx={{ pl: 4 }}
                      >
                        <ListItemText primary="About IITISM" />
                      </ListItemButton>
                      <ListItemButton
                        component={NavLink}
                        to="/about/administration"
                        sx={{ pl: 4 }}
                      >
                        <ListItemText primary="Administration" />
                      </ListItemButton>
                    </List>
                  </Collapse>
                  <ListItemButton
                    sx={{ my: "1rem" }}
                    onClick={() => setOpenLabsSmall(!openLabsSmall)}
                  >
                    <ListItemText primary="Labs" />
                    {openLabsSmall ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openLabsSmall} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        component={NavLink}
                        to="/labs/gaming-and-animation"
                      >
                        <ListItemText primary="Gaming And Animation Lab" />
                      </ListItemButton>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        component={NavLink}
                        to="/labs/electronics-and-iot"
                      >
                        <ListItemText primary="Electronics And Iot Lab" />
                      </ListItemButton>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        component={NavLink}
                        to="/labs/mechanical-tools-and-rapid-prototyping"
                      >
                        <ListItemText primary="Mechanical Tools And Rapid Prototyping Lab" />
                      </ListItemButton>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        component={NavLink}
                        to="/labs/pouch-battery-cell-assembly"
                      >
                        <ListItemText primary="Pouch Battery Cell Assembly Lab" />
                      </ListItemButton>
                      <ListItemButton
                        component={NavLink}
                        to="/labs/robotics"
                        sx={{ pl: 4 }}
                      >
                        <ListItemText primary="Robotics Lab" />
                      </ListItemButton>
                    </List>
                  </Collapse>
                  <ListItemButton
                    sx={{
                      my: "1rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button variant="contained" fullWidth>
                      Login
                    </Button>
                  </ListItemButton>
                  <ListItemButton
                    sx={{
                      my: "1rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {/* <Button variant="contained" fullWidth>
                      Register
                    </Button> */}
                  </ListItemButton>
                </List>
              </Box>
            </ModifiedDrawer>
          </Box>
          {/* NORMAL NAVBAR */}
          <Box
            sx={{
              // border: "1px solid green",
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              width: "100%",
              gap: "0.5em",
            }}
          >
            <Button
              sx={{
                my: 2,
                color: "black",
                display: "block",
                "&:hover": { backgroundColor: "#019ee0", color: "white" },
              }}
            >
              <Link
                as={NavLink}
                to="/"
                underline="none"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Home
              </Link>
            </Button>
            <Box
              onMouseEnter={() => setOpenAbout(true)}
              onMouseLeave={() => setOpenAbout(false)}
            >
              <Button
                sx={{
                  my: 2,
                  color: "black",
                  position: "relative",
                  "&:hover": { backgroundColor: "#019ee0", color: "white" },
                }}
              >
                About
                <KeyboardArrowDownIcon />
              </Button>
              <Collapse in={openAbout} timeout="auto" unmountOnExit>
                <List
                  sx={{
                    px: "1rem",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                    position: "absolute",
                    boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%)",
                    borderRadius: "0  0 8px 8px",
                    zIndex: "9999",
                  }}
                  component="div"
                >
                  <ListItemButton component={NavLink} to="/about/nvcti" > 
                    <ListItemText primary="About NVCTI" />
                  </ListItemButton>
                  <ListItemButton component={NavLink} to="/about/iitism">
                    <ListItemText primary="About IITISM" />
                  </ListItemButton>
                  <ListItemButton
                    component={NavLink}
                    to="/about/administration"
                  >
                    <ListItemText primary="Administartion" />
                  </ListItemButton>
                </List>
              </Collapse>
            </Box>
            <Button
              sx={{
                my: 2,
                color: "black",
                display: "block",
                "&:hover": { backgroundColor: "#019ee0", color: "white" },
              }}
              component={NavLink}
              to="/events"
            >
              events
            </Button>
            <Box
              onMouseEnter={() => setOpenLabs(true)}
              onMouseLeave={() => setOpenLabs(false)}
            >
              <Button
                sx={{
                  my: 2,
                  color: "black",
                  "&:hover": { backgroundColor: "#019ee0", color: "white" },
                }}
              >
                labs
                <KeyboardArrowDownIcon />
              </Button>
              <Collapse in={openLabs} timeout="auto" unmountOnExit>
                <List
                  sx={{
                    px: "1rem",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                    position: "absolute",
                    boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%)",
                    borderRadius: "0  0 8px 8px",
                    zIndex: "9999",
                  }}
                  component="div"
                >
                  <ListItemButton
                    component={NavLink}
                    to="/labs/gaming-and-animation"
                  >
                    <ListItemText primary="Gaming And Animation Lab" />
                  </ListItemButton>
                  <ListItemButton
                    component={NavLink}
                    to="/labs/electronics-and-iot"
                  >
                    <ListItemText primary="Electronics And Iot Lab" />
                  </ListItemButton>
                  <ListItemButton
                    component={NavLink}
                    to="/labs/mechanical-tools-and-rapid-prototyping"
                  >
                    <ListItemText primary="Mechanical Tools And Rapid Prototyping Lab" />
                  </ListItemButton>
                  <ListItemButton
                    component={NavLink}
                    to="/labs/pouch-battery-cell-assembly"
                  >
                    <ListItemText primary="Pouch Battery Cell Assembly Lab" />
                  </ListItemButton>
                  <ListItemButton component={NavLink} to="/labs/robotics">
                    <ListItemText primary="Robotics Lab" />
                  </ListItemButton>
                </List>
              </Collapse>
            </Box>

          </Box>
        </Box>
        <Box
          className="breakpont-hidden"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              mr: "0.5rem",
              height: "max-content",
              backgroundColor: "#feac4d",
              "&:hover": { backgroundColor: "#feac4d" },
            }}
          >
            Login
          </Button>
          {/* <Button
            variant="contained"
            sx={{ height: "max-content", backgroundColor: "#019ee0" }}
          >
            Register
          </Button> */}
        </Box>
      </Container>
    </ModifiendAppBar>
  );
};

export default Navbar;
