import styled from "@emotion/styled";
import { Box } from "@mui/material";
import BGImg from "../../assets/3.png";

export const LabWrapper = styled(Box)({
  ".bg-wrapper": {
    // backgroundColor: "yellow",
    // position: "relative",
    // "&::after": {
    //   //   border: "10px solid green",
    //   content: '""',
    //   background: `url(${BGImg}) center no-repeat`,

    //   overflow: "hidden",
    //   position: "absolute",
    //   width: "100%",
    //   height: "100%",
    //   //   zIndex: "-1",
    //   opacity: "0.2",
    //   top: "0",
    //   left: "0",
    //   transform: "rotate(0deg) scale(0.8)",
    // },
    ".left-list": {
      width: "30%",
    },
    ".right-list": {
      width: "70%",
    },
  },
});
