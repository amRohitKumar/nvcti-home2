import styled from "@emotion/styled";
import { Box } from "@mui/material";
import IMG1 from "../../assets/decoration2.png";
import IMG2 from "../../assets/loading-icon.png";

export const Wrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  marginBottom: "6rem",
  marginTop: "6rem",
  position: "relative",

  ":before": {
    content: "''",
    backgroundImage: `url(${IMG1})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: "0%",
    left: "0%",
    width: "200px",
    // border: '1px solid red',
    zIndex: "10000",
    height: "200px",
    transform: "rotate(45deg)",
    "@media (max-width: 850px)": {
      display: "none",
    },
  },
  // ":after": {
  //   content: "''",
  //   backgroundImage: `url(${IMG2})`,
  //   backgroundPosition: "center",
  //   backgroundSize: "contain",
  //   backgroundRepeat: "no-repeat",
  //   position: "absolute",
  //   bottom: "-25%",
  //   right: "-5%",
  //   width: "300px",
  //   // border: '1px solid red',
  //   zIndex: "10000",
  //   height: "300px",
  //   animationName: "rotate360",
  //   animationDuration: "3000ms",
  //   animationDelay: "0",
  //   animationTimingFunction: "linear",
  //   animationIterationCount: "infinite",
  //   "@media (max-width: 850px)": {
  //     display: "none",
  //   },
  //   //  200ms 0 infinite',
  // },

  "@media (max-width: 850px)": {
    "&:before": {
      display: "none",
    },
  },
});
