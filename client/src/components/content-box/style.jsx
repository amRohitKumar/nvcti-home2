import { Box } from "@mui/material";
import styled from "@emotion/styled";

export const ContentDiv = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2em 2em",
  gap: "3rem",

  ".title": {
    marginBottom: "auto",
    color: "rgb(34, 139, 34)",
    letterSpacing: "1.5px",
  },
  ".content": {
    width: "50%",
    letterSpacing: "1.25px",
    wordSpacing: "2px",
    color: "rgb(82, 82, 82)",
  },

  "@media (max-width: 900px)": {
    flexDirection: "column",
    ".content": {
      width: "100%",
    },
  },
});
