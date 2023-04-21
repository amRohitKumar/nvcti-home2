import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import customFetch from "../../utils/axios";
import { toast } from "react-toastify";
import {
  Typography,
  Container,
  Box,
  Pagination,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { HomeCarousel, Preloader } from "../../components";
import { BottomLineBox, EventWrapper } from "./style";

const sliderData = [
  {
    id: 0,
    heading: "FOSTERING INNOVATION COLLABORATION",
    desc: "To build a vibrant innovation ecosystem by establishing a network between innovators, academia and incubators.",
    src: process.env.PUBLIC_URL + "/assets/images/slide1.webp",
  },
  {
    id: 1,
    heading: "YOUTH INNOVATION INCUBATOR",
    desc: "To attract a large number of youth who demonstrate problem solving zeal and abilities to work on new technology/innovation based start- ups.",
    src: process.env.PUBLIC_URL + "/assets/images/slide2.webp",
    url: "www.google.com",
  },
  {
    id: 2,
    heading: "NURTURING YOUNG INNOVATORS",
    desc: "To encourage, inspire and nurture young brains by supporting them to work with new ideas and converting them into concept and prototype.",
    src: process.env.PUBLIC_URL + "/assets/images/slide3.webp",
  },
  {
    id: 3,
    heading: "CREATIVITY FOR SOLUTIONS",
    desc: "To generate innovative solutions relevant to the local and global problems through experimentation, innovation and creativityTo generate innovative solutions relevant to the local and global problems through experimentation, innovation and creativity.",
    src: process.env.PUBLIC_URL + "/assets/images/slide4.webp",
  },
];

const events = [
  { name: "Event 1", url: "https://www.google.com" },
  { name: "Event 2", url: "https://www.google.com" },
  { name: "Event 3", url: "https://www.google.com" },
  { name: "Event 4", url: "https://www.google.com" },
  { name: "Event 5", url: "https://www.google.com" },
  { name: "Event 6", url: "https://www.google.com" },
  { name: "Event 7", url: "https://www.google.com" },
  { name: "Event 8", url: "https://www.google.com" },
  { name: "Event 9", url: "https://www.google.com" },
  { name: "Event 10", url: "https://www.google.com" },
];

const EventPage = () => {
  // Fetch event carousel object
  const [loading, setLoading] = useState(false);
  const [sliderImgs, setSliderImgs] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resp = await customFetch.get("/getdata?dashboardName=event");
        const result = JSON.parse(resp.data.data.value);
        setSliderImgs(result);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        toast.error(e.msg);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <Preloader />;
  }
  return (
    <EventWrapper>
      <HomeCarousel data={sliderData} />
      <Container className="content-container">
        <Box sx={{ mb: "2rem" }}>
          <BottomLineBox>
            <Typography variant="h4" sx={{ ml: "0.5rem" }}>
              Current Events
            </Typography>
          </BottomLineBox>
          <Box
            sx={{
              width: "100%",
              maxWidth: 460,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <List>
              {events.map((el, idx) => {
                if (idx > 2) return <></>;
                return (
                  <ListItem disablePadding key={idx}>
                    <ListItemButton component={NavLink} to={el.url}>
                      <ListItemIcon>
                        <ArrowForwardIosIcon />
                      </ListItemIcon>
                      <ListItemText primary={el.name} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>
        <Box>
          <BottomLineBox>
            <Typography variant="h4" sx={{ ml: "0.5rem" }}>
              Past Events
            </Typography>
          </BottomLineBox>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mb: "2rem",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 460,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <List>
                {events.map((el, idx) => (
                  <ListItem disablePadding key={idx}>
                    <ListItemButton component={NavLink} to={el.url}>
                      <ListItemIcon>
                        <ArrowForwardIosIcon />
                      </ListItemIcon>
                      <ListItemText primary={el.name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Pagination count={10} sx={{ mx: "auto" }} />
          </Box>
        </Box>
      </Container>
    </EventWrapper>
  );
};

export default EventPage;
