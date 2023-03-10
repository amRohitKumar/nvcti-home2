import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";

import NVCTILogo from "../../assets/nvcti-transparent.png";
import G20Logo from "../../assets/g20logo.jpg";
import IITISMLogo from "../../assets/iitism.png";

import { ModifiedDrawer, ModifiendAppBar } from "./style";

const Navbar = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openLabs, setOpenLabs] = useState(false);
  const [openAboutSmall, setOpenAboutSmall] = useState(false);
  const [openLabsSmall, setOpenLabsSmall] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <ModifiendAppBar position="static">
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          px: "0 !important",
          justifyContent: "space-between    ",
        }}
      >
        {/* LOGO BOX */}
        <Box>
          <div className="logo-div">
            <img className="logo-img" src={NVCTILogo} alt="NVCTI" />
            <Divider
              className="breakpont-hidden"
              orientation="vertical"
              flexItem
            />
            <img
              className="logo-img breakpont-hidden"
              src={IITISMLogo}
              alt="IIT ISM"
            />
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
        <Box disableGutters>
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
                  <ListItemButton sx={{ my: "1rem" }}>
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
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="NVCTI" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="IITISM" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="ADMINISTRATION" />
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
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Robotics" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Data" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="AI ML" />
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Starred" />
                      </ListItemButton>
                    </List>
                  </Collapse>
                  <ListItemButton sx={{ my: "1rem" }}>
                    <ListItemText primary="Contact" />
                  </ListItemButton>
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
                    <Button variant="contained" fullWidth>
                      Register
                    </Button>
                  </ListItemButton>
                </List>
              </Box>
            </ModifiedDrawer>
          </Box>
          {/* NORMAL NAVBAR */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              width: "100%",
              gap: "2em",
            }}
          >
            <Button sx={{ my: 2, color: "black", display: "block" }}>
              Home
            </Button>
            <Box
              onMouseEnter={() => setOpenAbout(true)}
              onMouseLeave={() => setOpenAbout(false)}
            >
              <Button sx={{ my: 2, color: "black", position: "relative" }}>
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
                    borderRadius: "0  0 10px 10px",
                  }}
                  component="div"
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                  </ListItemButton>
                </List>
              </Collapse>
            </Box>
            <Button sx={{ my: 2, color: "black", display: "block" }}>
              events
            </Button>
            <Box
              onMouseEnter={() => setOpenLabs(true)}
              onMouseLeave={() => setOpenLabs(false)}
            >
              <Button sx={{ my: 2, color: "black" }}>
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
                  }}
                  component="div"
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                  </ListItemButton>
                </List>
              </Collapse>
            </Box>
            <Button sx={{ my: 2, color: "black", display: "block" }}>
              contact
            </Button>
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
            sx={{ mr: "0.5rem", height: "max-content" }}
          >
            Login
          </Button>
          <Button variant="contained" sx={{ height: "max-content" }}>
            Register
          </Button>
        </Box>
      </Container>
    </ModifiendAppBar>
  );
};

export default Navbar;
