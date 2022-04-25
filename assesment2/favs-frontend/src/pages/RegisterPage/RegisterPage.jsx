import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import {
  Btn,
  Logo,
  NotificationContext,
  Preloading,
  TitleField,
  ToggleMode,
} from "../../components";

import { RegisterForm } from "./RegisterForm";
import { loginGoogleService, validateTokenService } from "../../services";
import { useFetchAndLoad } from "../../hooks";
import { login } from "../../redux";
import "./registerPage.scss";

export const RegisterPage = () => {
  const [isForm, setIsForm] = useState(false);
  const { loading, callEndpoint } = useFetchAndLoad();
  const dispatch = useDispatch();
  const { openNotice } = useContext(NotificationContext);

  const handleLoadForm = () => {
    setIsForm((s) => !s);
  };

  const handleGoogleLogin = async ({ profileObj }) => {
    const { data: token } = await callEndpoint(
      loginGoogleService({ profileObj })
    );
    const { data: payload } = await callEndpoint(validateTokenService(token));
    dispatch(login({ ...token, ...payload }));
    await openNotice(`Welcome ${payload.name}`);
  };

  return (
    <div className="register">
      {loading ? (
        <Preloading />
      ) : (
        <>
          <ToggleMode />
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
        </>
      )}
    </div>
  );
};
