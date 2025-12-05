import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import "./HomeAnimation.css";

export const HomeAnimation = () => {
  const [displayNone, setDisplayNone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayNone(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (displayNone) return null;
  return (
    <div className={`header-transition ${displayNone ? "d-none" : ""}`}>
      <div>
        <img className="logo-transition" src={logo} alt="Logo" />
      </div>
    </div>
  );
};
