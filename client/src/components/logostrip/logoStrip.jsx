import { Divider } from "@mui/material";
import { LogoStripBox } from "./style";
import NVCTILogo from "../../assets/nvcti-transparent.png";
import G20Logo from "../../assets/g20logo.jpg";
import IITISMLogo from '../../assets/iitism.png';

const LogoStrip = () => {
  return (
    <LogoStripBox>
      <div className="logo-div">
        <img className="logo-img" src={NVCTILogo} alt="NVCTI" />
        <Divider className="breakpont-hidden" orientation="vertical" flexItem />
        <img className="logo-img breakpont-hidden" src={IITISMLogo} alt="IIT ISM" />
        <Divider className="breakpont-hidden" orientation="vertical" flexItem />
        <img className="logo-img breakpont-hidden" src={G20Logo} alt="G20" />
      </div>
      <div></div>
    </LogoStripBox>
  );
};

export default LogoStrip;