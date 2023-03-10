import { Drawer, Box } from "@mui/material";
import styled from "@emotion/styled";

export const ModifiedDrawer = styled(Drawer)({
  ".MuiDrawer-paper": {
    // border: '1px solid red',
    padding: "0.5rem 1rem",
    width: "95vw",
  },
});

export const ModifiendAppBar = styled(Box)({
  backgroundColor: "white",
  color: "black",
  boxShadow: "none",
  padding: "1rem 1rem 0 1rem",
  
  ".logo-div": {
    display: "flex",
    flexWrap: "nowrap",
    gap: "0.8em",
  },
  ".logo-img": {
    height: "50px",
  },
  "@media (max-width: 900px)": {
    ".breakpont-hidden": {
      display: "none",
    },
  },
});
