import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const GalleryItem = styled(Box)(({ imgUrl, title }) => ({
  width: "450px",
  height: "300px",
  maxWidth: "450px",
  maxHeight: "300px",
//   border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",

  ".container": {
    position: "relative",
    backgroundImage: `url(${imgUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    transition: "all 300ms ease-in",

    "&:hover": {
      transform: "scale(1.2)",
      zIndex: "999",
      ":after": {
        opacity: '1',
      }
    },

    ":after": {
      content: `'${title}'`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: '1.2rem',
      transformOrigin: 'center',
      width: "100%",
      height: "100%",
      position: "absolute",
      backgroundColor: "rgba(52, 73, 94, 0.75) !important",
      opacity: '0',
    },
  },
}));
