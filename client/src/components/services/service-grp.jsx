import { Container } from "@mui/material";
import Service from "./service";

const Services = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: "2rem",
        // border: '1px solid green',
        // backgroundColor: '#0d0e43'
      }}
    >
      <Service />
      <Service />
      <Service />
      <Service />
      <Service />
    </Container>
  );
};

export default Services;
