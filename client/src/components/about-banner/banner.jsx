import { BannerBox } from "./style";

const AboutBanner = ({ title, body, imgurl }) => {
  return (
    <BannerBox>
      <img src={imgurl} alt="about-banner" style={{width: '100%'}} />
      {title&&<div className="banner-text">{title}</div>}
      {body && <div className="banner-para">{body}</div>}
    </BannerBox>
  );
};

export default AboutBanner;
