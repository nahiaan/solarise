import { Link } from "react-router-dom";
import "./Circle.scss";

export default function CircleSmall({ linkTo, image, addClass }) {
  return (
    <div className="circle__container">
      <Link to={linkTo} className={`circle ${addClass}`}>
        <img src={image} alt="circle" className="circle__image" />
      </Link>
    </div>
  );
}
