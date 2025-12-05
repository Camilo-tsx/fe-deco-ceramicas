import { Link } from "react-router-dom";
import artistic from "../../assets/images/artistic-image.jpg";
import kitchen from "../../assets/images/kitchen-home-image.jpeg";
import living from "../../assets/images/livingroom-image.jpg";
import accesories from "../../assets/images/accesories-image.jpg";
import "./Home.css";
import { HomeAnimation } from "./HomeAnimation";

export const Home = () => {
  return (
    <div className="global-background-container">
      <HomeAnimation />
      <div className="firstbackground-container">
        <Link
          to="/catalog?category=DECO ARTE"
          className="artistic-image-container"
        >
          <img className="w-100 h-100" src={artistic} alt="catalog-image" />
          <h2>Deco Arte</h2>
          <h3>Descubrir</h3>
        </Link>
        <Link
          to="/catalog?category=DECO HOME"
          className="living-image-container"
        >
          <img className="w-100 h-100" src={living} alt="catalog-image" />
          <h2>Deco Home</h2>
          <h3>Descubrir</h3>
        </Link>
      </div>
      <div className="secondbackground-container">
        <Link to="/catalog?category=COCINA" className="kitchen-image-container">
          <img className="w-100 h-100" src={kitchen} alt="catalog-image" />
          <h2>Cocina</h2>
          <h3>Descubrir</h3>
        </Link>
        <Link
          to="/catalog?category=ACCESORIOS"
          className="accesories-image-container"
        >
          <img className="w-100 h-100" src={accesories} alt="catalog-image" />
          <h2>Accesorios</h2>
          <h3>Descubrir</h3>
        </Link>
      </div>
    </div>
  );
};
