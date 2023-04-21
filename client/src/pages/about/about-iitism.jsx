import { Box } from "@mui/material";
import BannerImg from "../../assets/About_ISM.jpg";
import { ContentBox, AboutBanner } from "../../components";

const AboutIITISM = () => {
  return (
    <Box>
      <AboutBanner
        // title="ABOUT IIT ISM"
        // body="IIT(ISM) is an Institute of National Importance. IIT (ISM) has 18 academic departments covering Engineering, Applied Sciences, Humanities and Social Sciences and Management programs. It was formerly known as Indian School of Mines, Dhanbad before its conversion into an Indian Institute of Technology (IIT)."
        imgurl={BannerImg}
      />
      <ContentBox />
    </Box>
  );
};

export default AboutIITISM;
