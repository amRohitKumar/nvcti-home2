import { Box } from "@mui/system";
import styled from "@emotion/styled";

const Img = styled.img`
  height: 100%;
  transition: all 100ms;
  transform-origin: center;
`;

const Carousel = ({ data }) => {
  return (
    <Box
      sx={{
        m: 4,
        overflowX: "scroll",
        display: "flex",
        gap: "1.3em",
        paddingBlock: "2em",
      }}
    >
      {data.map((img) => (
        <Box sx={{ width: "365px", height: "168px" }} key={img}>
          <Img src={img} />
        </Box>
      ))}
    </Box>
  );
};

export default Carousel;
