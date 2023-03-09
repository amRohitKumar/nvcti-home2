import { BannerBox } from "./style";

const AboutBanner = ({ title, body, imgurl }) => {
  return (
    <BannerBox imgurl={imgurl}>
      <div className="banner-text">{title}</div>
      {body && <div className="banner-para">{body}</div>}
    </BannerBox>
  );
};

export default AboutBanner;
