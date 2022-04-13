import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Btn, Logo, TitleField, ToggleMode } from "../../components";
import { ModeColorContext } from "../../context";
import { LoginForm } from "./LoginForm";
import "./login.scss";

export const Login = () => {
  const { modeColor, changeModeColor } = useContext(ModeColorContext);
  const [isForm, setIsForm] = useState(false);

  const handleLoadForm = () => {
    setIsForm((s) => !s);
  };

  return (
    <div className={!modeColor ? "login" : "login dark"}>
      <ToggleMode active={modeColor} handler={changeModeColor} />
      <div className="container">
        <Logo />
        <TitleField text="Inicia sessión para continuar" center />

        {!isForm ? (
          <>
            <Btn
              label="Iniciar sesión"
              btn="outline"
              fa="envelope"
              onClick={handleLoadForm}
              className="btn-block"
            />
            <Btn
              label="Continúa con Google"
              btn="default"
              fa="google"
              className="btn-block"
            />
          </>
        ) : (
          <LoginForm />
        )}

        <div>
          ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
        </div>
      </div>
    </div>
  );
};
