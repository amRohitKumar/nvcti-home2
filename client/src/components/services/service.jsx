import { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { ServiceWrapper } from "./style";
import AOS from 'aos'; 
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Service = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <ServiceWrapper data-aos="zoom-in-up" data-aos-once data-aos-offset="250">
      <Box className="inner-div">
        <Box sx={{ mb: 1 }}>
          <AcUnitIcon fontSize="large" />
        </Box>
        <Typography sx={{ mx: 1 }}>
          Improving Health through Automation
        </Typography>
        <Button size="large">
          <ArrowCircleRightIcon fontSize="large" />
        </Button>
      </Box>
    </ServiceWrapper>
  );
};

export default Service;
