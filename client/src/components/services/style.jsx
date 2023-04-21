import styled from "@emotion/styled";
import { Box } from "@mui/material";
import DummyImg from "../../assets/home1.png";

export const ServiceWrapper = styled(Box)({
  // clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
  clipPath: "polygon(20% 0, 80% 0, 100% 50%, 80% 100%, 20% 100%, 0% 50%)",
  width: "300px",
  height: "270px",
  border: "1px solid red",
  //  backgroundImage: `url(${DummyImg})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  overflow: "hidden",
  backgroundColor: "red",
  borderRadius: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  
  ".inner-div": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'column',
    textAlign: 'center',
    clipPath: "polygon(20% 0, 80% 0, 100% 50%, 80% 100%, 20% 100%, 0% 50%)",
    backgroundColor: "white",
    width: "70%",
    height: "70%",
  },
});
