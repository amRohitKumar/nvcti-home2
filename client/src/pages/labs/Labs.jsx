import { useState } from "react";
import {
  Container,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { AboutBanner, LabCarousel } from "../../components";
import { lookUp } from "./Labs-info";
import BannerImg from "../../assets/img.jpg";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { LabWrapper } from "./style";

const Labs = ({ lab }) => {
  const data = lookUp[lab];
  const [selectedTab, setTab] = useState(1);
  return (
    <LabWrapper>
      <AboutBanner imgurl={BannerImg} />
      <Box className="bg-wrapper">
        <Container
          maxWidth="lg"
          sx={{ mt: 4, mb: 4, display: "flex", border: "1px solid green" }}
        >
          <Box className="left-list">
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setTab(1)}>
                  <ListItemText primary="Lab Facilities" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setTab(2)}>
                  <ListItemText primary="Team" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setTab(3)}>
                  <ListItemText primary="Services" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setTab(4)}>
                  <ListItemText primary="Events" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => setTab(5)}>
                  <ListItemText primary="Projects" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
          <Box className="right-list" sx={{ border: "1px solid red", p: 2 }}>
            {selectedTab === 1 && (
              <Box>
                {data.equipments.map((el, idx) => {
                  return (
                    <List>
                      <ListItem disablePadding>
                        <ListItemText primary={el.name} />
                      </ListItem>
                    </List>
                  );
                })}
              </Box>
            )}
            {selectedTab === 2 && (
              <Box>
                {data.equipments.map((el, idx) => {
                  return (
                    <List>
                      <ListItem disablePadding>
                        <ListItemText primary={el.name} />
                      </ListItem>
                    </List>
                  );
                })}
              </Box>
            )}
          </Box>
        </Container>
        <Container>
          <LabCarousel data={data.images} />
        </Container>
      </Box>
    </LabWrapper>
  );
};

export default Labs;
