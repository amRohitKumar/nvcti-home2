import { Box } from "@mui/material";
import BannerImg from "../../assets/about_admin.jpg";
import { ContentBox, AboutBanner } from "../../components";

const AboutAdministration = () => {
  return (
    <Box>
      <AboutBanner
        // title="ADMINSTRATION"
        // body="Our Faculty is Committed to Providing Students with Hands-On Learning Opportunities and Real-World Experience, to Produce well-rounded and Skilled Engineers."
        imgurl={BannerImg}
      />
      <ContentBox />
    </Box>
  );
};

export default AboutAdministration;
