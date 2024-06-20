//import { ReactComponent as LogoDark } from "../assets/images/logos/xtremelogo.svg";
import thetavega from '../assets/images/bg/Main02.png'
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src={thetavega} alt="not found" height="75px" width="100%" style={{marginLeft:"2rem"}} />
      {/* <LogoDark /> */}
      {/* <h4>HiTechGroupIndia</h4> */}
    </Link>
  );
};

export default Logo;
