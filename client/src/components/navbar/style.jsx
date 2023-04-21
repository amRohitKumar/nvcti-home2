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
  // background: "linear-gradient(30deg, rgba(172, 172, 172, 0.144) 0%, rgba(255,255,255,1) 100%)",
  backgroundColor: "white",
  color: "black",
  padding: "1rem 1rem 0 2rem",
  borderBottom: "1px solid #b7b7b767",
  position: "sticky",
  top: "0",
  zIndex: "99999",
  // borderRadius: "0 0 15px 15px",
  boxShadow: "0px 15px 10px -15px #212121",

  ".logo-div": {
    display: "flex",
    flexWrap: "nowrap",
    gap: "0.8em",
  },
  ".logo-img": {
    height: "50px",
  },
  ".large-logo-img": {
    height: "150px",
  },
  "@media (max-width: 900px)": {
    ".breakpont-hidden": {
      display: "none",
    },
  },
});
