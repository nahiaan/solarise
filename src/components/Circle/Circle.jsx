import { Link } from "react-router-dom";
import "./Circle.scss";

export default function Circle({
  linkTo,
  header,
  image,
  text,
  addClass,
  headerBelow,
}) {
  return (
    <div className="circle__container">
      {headerBelow || <h3 className="circle__header">{header}</h3>}

      <Link to={linkTo} className={`circle ${addClass}`}>
        <img src={image} alt="circle" className="circle__image" />
        <p className="circle__text">{text}</p>
      </Link>
      {headerBelow && <h3 className="circle__header">{header}</h3>}
    </div>
  );
}
