import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import {
  Btn,
  LoadingMain,
  Logo,
  NotificationContext,
  Preloading,
  TitleField,
  ToggleMode,
} from "../../components";
import { LoginForm } from "./LoginForm";
import { loginGoogleService, validateTokenService } from "../../services";
import { useFetchAndLoad } from "../../hooks";
import { login } from "../../redux";
import "./loginPage.scss";

export const LoginPage = () => {
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
    <div className="login">
      {loading ? (
        <LoadingMain />
      ) : (
        <>
          <ToggleMode />
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
              <LoginForm />
            )}

            <div>
              ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
