import styled from "@emotion/styled";
import LabsBgImg from "../../assets/globe-bgg.png";
import { Box } from "@mui/material";
import BGImg from "../../assets/decoration4.png";


export const HomeWrapper = styled(Box)({
  // padding: "2rem 3rem",
  width: "100vw !important",
  // outline: '1px solid red',

  "@media (max-width: 400px)": {
    padding: "1.5rem 0",
  },
  ".home-img1": {
    width: "400px",
    aspectRatio: "1/1",
  },
  // LABS BOX
  ".labs-box": {
    color: 'white',
    position: "relative",

    "::before": {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent',
      backgroundImage: `url(${LabsBgImg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundSize: "cover",
      opacity: '0.1',
    },
  },
  // ".labs-box::after": {
    // content: '""',
    // backgroundImage: `url(${LabsBgImg})`,
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "right",
    // backgroundSize: "cover",
    // // border: "1px solid red",
    // width: "100%",
    // height: "100%",
    // position: "absolute",
    // zIndex: "-5",
    // right: "0",
    // bottom: "-20%",
    // opacity: "0.4",
  // },
  ".left-home": {
    width: "40%",
  },
  ".right-home": {
    width: "55%",
    ".about-stat": {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    ".about-info": {
      fontSize: "1.5rem",
      color: "#949494",
      fontWeight: "bold",
    },
  },
  ".services-box": {
    position: 'relative',

    "::before": {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundImage: `url(${BGImg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
      backgroundSize: "cover",
      opacity: '0.5',
    },
  },
});
