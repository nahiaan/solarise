import Logo from "../../assets/Solarize-logo.svg";
import "./SplashScreen.scss";

const SplashScreen = () => {
  return (
    <div className="splash__container">
      <img src={Logo} alt="solarise logo" className="splash__image" />
    </div>
  );
};

export default SplashScreen;
