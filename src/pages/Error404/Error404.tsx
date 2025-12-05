import CatError from "../../assets/images/CatError.png";
import background from "../../assets/images/backgroundcat.jpg";
import "./Error404.css";

export const Error404 = () => {
  return (
    <div className="error-container">
      <img
        className="backgrounderror-image"
        src={background}
        alt="background"
      />
      <div className="error-image">
        <img src={CatError} alt="ErrorCAT04" />
      </div>
      <div className="error-text">
        <div className="error-title">
          <p>PÁGINA NO DISPONIBLE</p>
        </div>
        <div className="error-description">
          <p>Lo sentimos, la página que buscas no esta disponible</p>
          <a href="/">
            <button>Volver al inicio</button>
          </a>
        </div>
      </div>
    </div>
  );
};
