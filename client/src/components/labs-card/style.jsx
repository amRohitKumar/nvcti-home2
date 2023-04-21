import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const ModifiedCard = styled(Card)({
  background: "linear-gradient(145deg, #d3d2d2, #dadadaaf)",
  // boxShadow: "19px 19px 38px #d5d5d5, -19px -19px 38px #ebebeb",
  ".labs-btn": {
    border: "none",
    color: "#fff",
    "background-image": "linear-gradient(30deg, #019ee0, #6fe6f6)",
    "border-radius": "20px",
    "background-size": "100% auto",
    "font-family": "inherit",
    padding: "0.6em 1em",
    ":hover": {
      "background-position": "right center",
      "background-size": "200% auto",
      animation: "pulse512 1.5s infinite",
    },
  },
  ".parent": {
    overflow: "hidden",
  },
  ".MuiCardMedia-root": {
    transition: "all 500ms ease !important",
  },
  ":hover": {
    ".MuiCardMedia-root": {
      transform: "scale(1.2)",
    },
  },
});
