import logo from "../../../assets/images/logo.png";
import CustomForm from "../../shared/CustomForm/CustomForm";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="p-container">
        <p>Quiero recibir descuentos exclusivos</p>
      </div>
      <div className="form-container">
        <CustomForm />
      </div>
      <div className="social-container">
        <div>
          <p>Contáctanos:</p>
          <a href="">
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
        <div>
          <p>Siguenos en instagram:</p>
          <a href="">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
