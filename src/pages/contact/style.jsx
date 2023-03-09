import { Box } from "@mui/material";
import styled from "@emotion/styled";

export const ContactBox = styled(Box)({
  padding: "2em 4em",
  display: "flex",
  justifyContent: "space-between",
  margin: "0 auto",

  "#leftBox, #rightBox": {
    width: "45%",
  },
  ".contact-title": {
    color: "deeppink",
    marginBottom: "0.5rem",
  },
  ".contact-subtitle": {
    fontSize: "1.75rem",
    marginBottom: "0.75rem",
  },
  "#leftBox": {
    ".contact-body": {
      fontSize: "1.25rem",
    },
    ".contact-icons": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: "3rem",

      ".icon": {
        display: "flex",
        gap: "1rem",
        marginBottom: "1.25rem",
        letterSpacing: "1.1px",
        ".MuiSvgIcon-root": {
          color: "deeppink",
        },
      },
    },
  },
  "#rightBox": {
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "1px 1px 8px #dddddd",
  },
  "@media (min-width: 1100px)": {
    width: "80%",
  },
  "@media (max-width: 950px)": {
    flexDirection: "column",
    "#leftBox, #rightBox": {
      width: "90%",
    },
  },
});
