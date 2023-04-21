import { Typography, Box } from "@mui/material";

const SectionIntro = ({ title, desc, titleStyle }) => {
  console.log(titleStyle);
  return (
    <Box sx={{ my: "2rem" }}>
      <Typography variant="h3" textAlign={"center"} gutterBottom sx={{...titleStyle}}>
        {title}
      </Typography>
      {desc && (
        <Typography
          variant="body1"
          gutterBottom
          textAlign="justify"
          sx={{
            textAlign: "center",
            paddingX: { xs: "1rem", lg: "8rem" },
          }}
        >
          {desc}
        </Typography>
      )}
    </Box>
  );
};

export default SectionIntro;
