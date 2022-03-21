import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { createUserAsync } from "../redux/actions/auth.actions";

export const SignupPage = React.memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputName = useRef();
  const inputUser = useRef();
  const inputPass = useRef();
  const inputBtn = useRef();

  const handleChange = e => {
    !!(
      inputName.current.value.length +
      inputUser.current.value.length +
      inputPass.current.value.length
    )
      ? (inputBtn.current.disabled = false)
      : (inputBtn.current.disabled = true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      createUserAsync({
        name: inputName.current.value,
        username: inputUser.current.value,
        password: inputPass.current.value,
      })
    );
    navigate("/login");
  };

  useEffect(() => {
    inputName.current.focus();
  }, []);

  return (
    <div className="form-content">
      <Logo />
      <h3>SIGN UP</h3>
      <form onSubmit={handleSubmit}>
        <div className="formInput">
          <input
            ref={inputName}
            type="text"
            name="fullname"
            required={true}
            onChange={handleChange}
            placeholder="Insert your fullname"
          />
          <span />
        </div>
        <div className="formInput">
          <input
            ref={inputUser}
            type="text"
            name="username"
            required={true}
            onChange={handleChange}
            placeholder="Insert your username"
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
            placeholder="Insert your password"
          />
          <span />
        </div>
        <button
          ref={inputBtn}
          className="btn btn-block btn-success"
          disabled={true}
        >
          CREATE AD ACCOUNT
        </button>
      </form>
      <Link to="/login">Or Login</Link>
    </div>
  );
});
