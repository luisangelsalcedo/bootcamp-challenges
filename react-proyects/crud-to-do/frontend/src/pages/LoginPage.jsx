import { useDispatch, useSelector } from "react-redux";

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Alert } from "../components/Alert";
import { Logo } from "../components/Logo";
import { loginAsync, loginGoogleAsync } from "../redux/actions/auth.actions";
import { GoogleLogin } from "react-google-login";

export const LoginPage = React.memo(() => {
  const { message, type } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const inputUser = useRef();
  const inputPass = useRef();
  const inputBtn = useRef();

  const handleChange = e => {
    !!(inputUser.current.value.length + inputPass.current.value.length)
      ? (inputBtn.current.disabled = false)
      : (inputBtn.current.disabled = true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      loginAsync({
        username: inputUser.current.value,
        password: inputPass.current.value,
      })
    );
    inputPass.current.value = "";
    inputUser.current.value = "";
    inputUser.current.focus();
  };

  const handleGoogleLogin = response => {
    dispatch(loginGoogleAsync(response));
    // console.log(response);
  };

  useEffect(() => {
    inputUser.current.focus();
  }, []);

  return (
    <div className="form-content">
      <Logo />
      <h3>SIGN IN</h3>
      <Alert message={message} show={!!message} type={type} />
      <form onSubmit={handleSubmit}>
        <div className="formInput">
          <input
            ref={inputUser}
            type="text"
            name="username"
            required={true}
            onChange={handleChange}
            placeholder="Username"
          />
          <span />
        </div>
        <div className="formInput">
          <input
            ref={inputPass}
            type="password"
            name="password"
            required={true}
            onChange={handleChange}
            placeholder="Password"
          />
          <span />
        </div>
        <button
          ref={inputBtn}
          className="btn btn-block btn-success"
          disabled={true}
        >
          SIGN IN
        </button>
      </form>
      <div>
        <GoogleLogin
          clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}
          buttonText="Log in with Google"
          onSuccess={handleGoogleLogin}
          onFailure={handleGoogleLogin}
          cookiePolicy={"single_host_origin"}
          className="btn btn-block"
        />
      </div>
      <br />
      <Link to="/signup">Create Account</Link>
    </div>
  );
});
