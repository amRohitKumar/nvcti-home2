import { Container } from "@mui/material";
const Preloader = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
      }}
    >
      <img
        className="loader-img"
        src={process.env.PUBLIC_URL + "/assets/nvcti_animated-2.gif"}
        alt="🕗 Loading..."
      />
    </Container>
  );
};

export default Preloader;
