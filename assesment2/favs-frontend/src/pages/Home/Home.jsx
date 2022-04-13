import { useContext } from "react";
import { Link, useLinkClickHandler } from "react-router-dom";
import { ReactComponent as Image } from "../../assets/svg/ilustracion1.svg";
import { Logo, TitleField, Btn, ToggleMode } from "../../components";
import { ModeColorContext } from "../../context";
import "./home.scss";

export const Home = () => {
  const { modeColor, changeModeColor } = useContext(ModeColorContext);
  const linkRegister = useLinkClickHandler("/login");

  return (
    <div className={!modeColor ? "home" : "home dark"}>
      <ToggleMode active={modeColor} handler={changeModeColor} />
      <div className="container-flex">
        <div>
          <div className="container">
            <Logo />
            <TitleField
              text="Inicia sessión y empieza a organizar tus listas favoritas"
              size="1.3"
              center
            />
            <Btn
              label="Iniciar sesión"
              btn="outline"
              onClick={linkRegister}
              className="btn-block"
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
