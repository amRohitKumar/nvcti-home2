import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Drawer from "@mui/material/Drawer";
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
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import { ModifiedDrawer } from "./style";

const pages = ["Home", "About", "Events", "Labs", "Contact"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [openAbout, setOpenAbout] = useState(false);
  const [openLabs, setOpenLabs] = useState(false);
  const [openAboutSmall, setOpenAboutSmall] = useState(false);
  const [openLabsSmall, setOpenLabsSmall] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",
        pt: "0",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* SMALL SCREEN NAVBAR */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
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
                </List>
              </Box>
            </ModifiedDrawer>
          </Box>
          {/* NORMAL NAVBAR */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
              width: "100%",
              gap: "2em",
            }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "black", display: "block" }}
            >
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
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "black", display: "block" }}
            >
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
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
