import { CarouselItemWrapper } from "./styles";
import { Button } from "@mui/material";

const Event = ({ title, desc, url, imageUrl, btnTxt, isLarge }) => {
  // console.log(isLarge);
  return (
    <CarouselItemWrapper imageUrl={imageUrl} isLarge={isLarge}>
      <div className="content">
        <div className="carousel-heading">{title}</div>
        <div className="carousel-para">{desc}</div>
        <br />
        {url && (
          <Button
            variant="contained"
            size="small"
            sx={{ width: "max-content" }}
          >
            {btnTxt || "View"}
          </Button>
        )}
      </div>
    </CarouselItemWrapper>
  );
};

export default Event;
