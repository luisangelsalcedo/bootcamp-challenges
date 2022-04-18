import { Link, useLinkClickHandler } from "react-router-dom";
import { ReactComponent as Image } from "../../assets/svg/ilustracion1.svg";
import { Logo, TitleField, Btn, ToggleMode } from "../../components";

import "./homePage.scss";

export const HomePage = () => {
  const linkRegister = useLinkClickHandler("/login");

  return (
    <div className="home">
      <ToggleMode />
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
