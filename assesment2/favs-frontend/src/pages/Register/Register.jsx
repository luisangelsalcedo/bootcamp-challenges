import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { Btn, Logo, TitleField, ToggleMode } from "../../components";
import { ColorModeContext } from "../../context";
import { RegisterForm } from "./RegisterForm";
import { loginGoogleService, validateTokenService } from "../../services";
import { useFetchAndLoad } from "../../hooks";
import { login } from "../../redux";
import "./register.scss";

export const Register = () => {
  const { colorMode, changeColorMode } = useContext(ColorModeContext);
  const [isForm, setIsForm] = useState(false);
  const { callEndpoint } = useFetchAndLoad();
  const dispatch = useDispatch();

  const handleLoadForm = () => {
    setIsForm((s) => !s);
  };

  const handleGoogleLogin = async ({ profileObj }) => {
    const { data: token } = await callEndpoint(
      loginGoogleService({ profileObj })
    );
    const { data: payload } = await callEndpoint(validateTokenService(token));
    dispatch(login({ ...token, ...payload }));
  };

  return (
    <div className={!colorMode ? "register" : "register dark"}>
      <ToggleMode active={colorMode} handler={changeColorMode} />
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
            <GoogleLogin
              clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}
              buttonText="Continúa con Google"
              onSuccess={handleGoogleLogin}
              onFailure={handleGoogleLogin}
              cookiePolicy="single_host_origin"
              className="btn btn-default btn-google  btn-block"
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
