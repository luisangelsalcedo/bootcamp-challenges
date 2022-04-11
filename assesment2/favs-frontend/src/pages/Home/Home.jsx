import "./home.scss";

import { useContext } from "react";
import { Link, useLinkClickHandler } from "react-router-dom";
import { ReactComponent as Image } from "../../assets/svg/ilustracion1.svg";
import { Logo, TitleField, Btn, ToggleMode } from "../../components";
import { ModeColorContext } from "../../context/ModeColorProvider";

export const Home = () => {
  const { modeColor, changeModeColor } = useContext(ModeColorContext);

  const linkRegister = useLinkClickHandler("/register");

  return (
    <div className={!modeColor ? "home" : "home dark"}>
      <ToggleMode active={modeColor} handler={changeModeColor} />
      <div className="container-flex">
        <div>
          <div className="container">
            <Logo />
            <TitleField
              text="Inicia sessión y empieza a organizarlo todo"
              center
            />
            <Btn
              label="Iniciar sesión"
              type="outline"
              handler={linkRegister}
              block
            />
            <div>
              ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
            </div>
          </div>
        </div>
        <div>
          <div className="img-responsive">
            <Image />
          </div>
        </div>
      </div>
    </div>
  );
};
