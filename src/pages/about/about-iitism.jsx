import { Box } from "@mui/material";
import BannerImg from "../../assets/img.jpg";
import { ContentBox, AboutBanner } from "../../components";

const AboutIITISM = () => {
  return (
    <Box>
      <AboutBanner
        title="ABOUT IIT ISM"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tenetur, sint nobis, itaque facilis ipsam in rem laboriosam quae pariatur, veritatis consequuntur modi earum obcaecati!"
        imgurl={BannerImg}
      />
      <ContentBox />
    </Box>
  );
};

export default AboutIITISM;
