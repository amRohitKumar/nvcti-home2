import { default as MuiCarousel } from "react-material-ui-carousel";
import Event from "./carousel-item";
import { CarouselWrapper } from "./styles";

const settings = {
  autoPlay: true,
  animation: "fade",
  indicators: true,
  duration: 500,
  navButtonsAlwaysVisible: true,
  navButtonsAlwaysInvisible: false,
  cycleNavigation: true,
  fullHeightHover: true,
  swipe: false,
};

const HomeCarousel = ({data, isLarge}) => {
  return (
    <CarouselWrapper >
      <MuiCarousel {...settings} className="carousel-div">
        {data.map((item, idx) => (
          <Event
            key={idx}
            title={item.heading}
            imageUrl={item.src}
            desc={item.desc}
            url={item.url}
            isLarge={isLarge}
          />
        ))}
      </MuiCarousel>
    </CarouselWrapper>
  );
};

export default HomeCarousel;
