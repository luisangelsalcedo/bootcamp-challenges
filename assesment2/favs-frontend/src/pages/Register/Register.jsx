import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Btn, Logo, TitleField, ToggleMode } from "../../components";
import { ModeColorContext } from "../../context";
import { RegisterForm } from "./RegisterForm";
import "./register.scss";

export const Register = () => {
  const { modeColor, changeModeColor } = useContext(ModeColorContext);
  const [isForm, setIsForm] = useState(false);

  const handleLoadForm = () => {
    setIsForm((s) => !s);
  };

  return (
    <div className={!modeColor ? "register" : "register dark"}>
      <ToggleMode active={modeColor} handler={changeModeColor} />
      <div className="container">
        <Logo />
        <TitleField text="Crea tu cuenta para continuar" center />

        {!isForm ? (
          <>
            <Btn
              label="Continúa con tu correo"
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
          <RegisterForm />
        )}

        <div>
          ¿Ya tienes cuenta? <Link to="/login">Inicia sessión</Link>
        </div>
      </div>
    </div>
  );
};
