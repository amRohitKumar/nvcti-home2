import { Box, Typography } from "@mui/material";
import BannerImg from "../../assets/about_banner.jpg";
import { ContentBox, AboutBanner } from "../../components";
import { ContentDiv } from "../../components/content-box/style";

const AboutNVCTI = () => {
  return (
    <Box>
      <AboutBanner
        // title="ABOUT NVCTI"
        // body="Naresh Vashist Centre for Tinkering and Innovation is the brand new cell developed in IIT (ISM) Dhanbad equipped with state of the art labs and tools with cutting edge technology, to provide students a complete platform to drive their Ideas into reality, and bring out the best in our students in terms on Innovation, creativity and all round development."
        imgurl={BannerImg}
      />
      <ContentDiv>
        <Typography variant="h4" className="title">
          About
        </Typography>
        <Typography variant="body1" className="content">
          NVCTI stands for the Naresh Vashisht Centre for Tinkering &
          Innovation, which is a facility launched by the Indian Institute of
          Technology (Indian School of Mines) Dhanbad, the primary objective of
          the NVCTI is to enhance the inter-disciplinary skills of professionals
          and students across various sectors, including government
          organizations, academic institutions, and industry.
          <br />
          Intending to build the culture of innovation among the students and
          faculty of the institute, IIT (ISM) Dhanbad has established the Naresh
          Vashisht Centre for Tinkering and Innovation (NVCTI) in September 2019
          through the recommendation of the 11th BOG meeting of IIT (ISM)
          Dhanbad, with the generous financial support of our distinguished
          alumnus of the 1967 batch of Petroleum Engineering, Shri Naresh
          Vashisht. In an endeavor to provide an enabling physical environment
          for young minds to transform ideas into products leading to successful
          entrepreneurship, the centre is equipped with stating-of-the-art
          “Tinkering and Innovation Laboratory” consisting of a Mechanical &
          Rapid Prototyping Unit; Gaming and Animation Design Unit; Electronic
          Circuit and IOT Unit; Battery-Pouch Cell Assembly Unit and Robotics
          and Automation Unit. The centre, situated in an area of approximately
          11000 sq feet of the newly constructed Central Research Extension
          (CRE) building inside the institute campus, is intended to build a
          positive innovation ecosystem to generate creative solutions to local
          and global problems of societal importance.
          <br />
          The NVCTI program offers various online courses, workshops, and
          training programs on cybersecurity, including topics such as ethical
          hacking, network security, cryptography, and cybersecurity management.
          The program also provides hands-on training and real-world scenarios
          to help participants gain practical knowledge and skills.
          <br />
          The NVCTI program aims to develop a skilled workforce in the field of
          cybersecurity and contribute to the country's cybersecurity
          preparedness. It also promotes research and innovation in the field of
          cybersecurity and collaborates with other institutions and
          organizations to achieve its goals
        </Typography>
      </ContentDiv>
    </Box>
  );
};

export default AboutNVCTI;
