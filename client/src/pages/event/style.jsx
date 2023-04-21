import styled from "@emotion/styled";
import { Box } from "@mui/material";
import BottomLine from "../../assets/bottom_line.png";
import BgImg from "../../assets/decoration4.png";

export const EventWrapper = styled(Box)({
  ".content-container": {
    position: "relative",

    "::before": {
      content: '""',
      background: `url(${BgImg}) no-repeat`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      position: "absolute",
      width: "100%",
      height: "100%",
      left: "0",
      opacity: '0.1',
    },
  },
});

export const BottomLineBox = styled(Box)({
  position: "relative",
  marginBottom: "1.5rem",

  "::after": {
    content: '""',
    background: `url(${BottomLine}) no-repeat `,
    position: "absolute",
    width: "100%",
    height: "100%",
    overflow: "clip",
  },
});
