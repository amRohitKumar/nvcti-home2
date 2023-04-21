import { useEffect } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AOS from "aos";
import { Box } from "@mui/material";
import { ModifiedCard } from "./style";

const LabCard = ({ title, desc, imgUrl, cardId }) => {
  let currWidth = window.innerWidth;
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <ModifiedCard
      sx={{
        width: currWidth >= 1250 ? currWidth / 6 - 20 : `250px`,
        display: "flex",
        flexDirection: "column",
      }}
      data-aos="zoom-in"
    >
      <Box className="parent">
        <CardMedia sx={{ height: 140 }} image={imgUrl} title="labs" />
      </Box>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ height: "100px" }}
        >
          {title}
        </Typography>
        <Typography
          className="addDots"
          variant="body2"
          color="text.secondary"
          sx={{ height: "165px" }}
        >
          {desc}
        </Typography>
      </CardContent>
      <CardActions sx={{ mb: "0" }}>
        <Button size="small" className="labs-btn">Know More</Button>
      </CardActions>
    </ModifiedCard>
  );
};

export default LabCard;
