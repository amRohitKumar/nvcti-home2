import { useEffect, useState } from "react";
import { Box, Button, Container, Typography, Divider } from "@mui/material";
import {
  HomeCarousel,
  LabCard,
  SectionIntro,
  SocialMedia,
  Services,
  Preloader,
} from "../../components";
import { Contact } from "../index";
import customFetch from "../../utils/axios";
// import DummyImg from "../../assets/img.jpg";
import { HomeWrapper } from "./style";
import Home1 from "../../assets/home1.png";
// import BGImg from "../../assets/decoration4.png";
// import Home3 from "../../assets/home3.png";

import PouchBatteryImg from "../../assets/POUCH_BATTERY_CELL_ASSEMBLY UNIT.jpg";
import MechanicalLabImg from "../../assets/MECHANICAL_TOOLS_RAPID_PROTOTYPING.webp";
import ElectronicsLabImg from "../../assets/ELECTRONICS_CIRCUIT_IOT_UNIT.webp";
import RoboticsLabImg from "../../assets/ROBOTICS_AND_AUTOMATION_UNIT.webp";
import AnimationLabImg from "../../assets/ANIMATION_DESIGN_UNIT.webp";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const labsInfo = [
  {
    name: "Pouch Battery Cell Assembly Unit",
    desc: "This is a prototype battery fabrication unit in the form of a coin or pouch cell, which will be beneficial for the students to have hands-on experience with the techniques used for battery fabrication and to test their materials for efficiency.",
    imgUrl: PouchBatteryImg,
  },
  {
    name: "Mechanical tools & Rapid Prototyping",
    desc: "Working with CNC milling machines, lathe machines, grinders and welding machines, students are motivated to give ideas in the tinkering labs which is completely disguised as mini workshop.",
    imgUrl: MechanicalLabImg,
  },
  {
    name: "Electronics circuit & IOT unit",
    desc: "This laboratory will let you learn about the basic and advanced instruments to study the different behavior of electronic circuits with a focused and practical environment who wants to learn hands-on electronics design for innovation and industrial application.",
    imgUrl: ElectronicsLabImg,
  },
  {
    name: "Robotics and Automation Unit",
    desc: "A unit which design, develop and train intelligent robots. Our motivation for robotization comes from the robotic arm we possess with dignity.",
    imgUrl: RoboticsLabImg,
  },
  {
    name: "Animation and Game Design Unit",
    desc: "In this unit we have major software facilities like Maya, UNITY, AR- Vuforia, Adobe package, Blender, Window Server, Flowol, Autodesk Inventor, Azure Machine Learning, Adams, Abaqus, AutoCAD, etc are also available.",
    imgUrl: AnimationLabImg,
  },
];
const galleryImg = [
  {
    original: process.env.PUBLIC_URL + "/assets/images/slide1.webp",
    title: "dfldl dfl kdf",
  },
  {
    original: process.env.PUBLIC_URL + "/assets/images/slide1.webp",
    title: " dlfldf fkdlk d",
  },
  {
    original: process.env.PUBLIC_URL + "/assets/images/slide1.webp",
    title: "dlf lfk fk ldkfd",
  },
  {
    original: process.env.PUBLIC_URL + "/assets/images/slide1.webp",
    title: "dlfdkl df kdlfkld",
  },
  {
    original: process.env.PUBLIC_URL + "/assets/images/slide1.webp",
    title: "dfl lfdkl fkd f",
  },
  {
    original: process.env.PUBLIC_URL + "/assets/images/slide1.webp",
    title: "dfl lfdkl fkd f",
  },
];

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

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [sliderImgs, setSliderImgs] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resp = await customFetch.get("/getdata?dashboardName=home");
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
    <HomeWrapper>
      <HomeCarousel id="home-carousel" data={sliderData} isLarge={true} />
      <SectionIntro
        title="About NVCTI"
        // desc="With the mission to provide students with a platform for promoting experimentation, innovation and creative output skills, we, at NVCTI are putting endeavours to inculcate convoluted thinking in an aesthetic approach in the minds of students and faculty members by polarizing thoughts into the process and thereby into a product. We also promote an innovation ecosystem to subsidize our students in their quest to explore and contribute to the world of cutting-edge technologies and entrepreneurship."
        sx={{ mb: "5rem" }}
      />
      <Container
        sx={{
          mb: "3rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box className="left-home" data-aos="fade-up" data-aos-once>
          <img
            src={Home1}
            alt="home-about-banner"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Box className="right-home">
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Best Medical Test Laboratory Solution.
          </Typography>
          <Typography component="div" sx={{ textAlign: "justify", my: "2rem" }}>
            Sed ut pers piciatis unde omnis iste natus error sit volu ptatem
            accus antium one dolor emque laudan tium, totam rem aperiam, eaque
            ipsam quae and eillo invetore off veritatis et quasi and visit our
            about page.
          </Typography>
          <Divider />
          <Box
            sx={{ display: "flex", justifyContent: "space-evenly", my: "1rem" }}
          >
            <Box>
              <Box className="about-stat">208+</Box>
              <Box className="about-info">Lab Assistant</Box>
            </Box>
            <Box>
              <Box className="about-stat">208+</Box>
              <Box className="about-info">Lab Assistant</Box>
            </Box>
            <Box>
              <Box className="about-stat">208+</Box>
              <Box className="about-info">Lab Assistant</Box>
            </Box>
          </Box>
          <Divider />
          <Typography sx={{ textAlign: "justify", my: "2rem" }}>
            Sed ut pers piciatis unde omnis iste natus error sit volu ptatem
            accus antium one dolor emque laudan tium totam rem aperiam eaque
            ipsam.
          </Typography>
          <Button variant="contained" component={Link} to="/about/nvcti">
            About Us
          </Button>
        </Box>
      </Container>
      {/* <Typography
        component={"p"}
        sx={{
          textAlign: "justify",
          paddingX: { xs: "1rem", lg: "8rem" },
        }}
      >
        We also promote an innovation ecosystem to subsidize our students in
        their quest to explore and contribute to the world of cutting-edge
        technologies and entrepreneurship. Our vision is to cultivate young
        fertile brains as the innovators and entrepreneurs of the future by
        promoting informal learning with a focus on indigenuos technology and
        advancements aimed at contributing positively to the economy, the
        environment and the society.
      </Typography> */}
      <Box
        className="labs-box"
        sx={{
          backgroundColor: "#0d0e43",
          pt: 2,
          pb: 6,
        }}
      >
        <SectionIntro
          title="Our Labs"
          desc="A well eqiped state of art workspace, popularly termed as tinkering lab, has
          become an essential integral part of any world class technical institute since
          it contributes toward overall development of youth into self-dependent and
          confident free-thinking innovator, which in turn will help the overall growth
          of the institute, society and the nation. In an endeavour to provide and
          enabling physical environment for young creators to go hands on and give
          shape and expression to develop a world class 'Tinkering and Innovation
          Laboratory' consisting of the following five seperate units."
        />
        <Box
          sx={{
            display: "flex",
            gap: { md: "1.5rem", xs: "2.5rem" },
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {labsInfo.map((el, idx) => {
            return (
              <LabCard
                key={idx}
                cardId={idx}
                title={el.name}
                desc={el.desc}
                imgUrl={el.imgUrl}
              />
            );
          })}
        </Box>
      </Box>
      <SocialMedia />
      <Box
        className="services-box"
        sx={{
          backgroundColor: "#0d0e43",
          pt: 2,
          pb: 6,
        }}
      >
        <SectionIntro
          title="Our Services"
          titleStyle={{ color: "white" }}
          sx={{ mb: "5rem" }}
        />
        <Services />
      </Box>
      <Contact />
    </HomeWrapper>
  );
};

export default Home;
