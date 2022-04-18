import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { InputForm, Btn } from "../../components";
import { PATTERNS } from "../../constants";
import { useFetchAndLoad } from "../../hooks";
import { loginService, validateTokenService } from "../../services";
import { login } from "../../redux";

export const LoginForm = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const btnRef = useRef();
  const dispatch = useDispatch();
  const { callEndpoint } = useFetchAndLoad();

  const handleChange = () => {
    const emailVal = emailRef.current.value.length;
    const passVal = passRef.current.value.length;
    let isDisable = true;
    if (emailVal + passVal) isDisable = false;
    btnRef.current.disabled = isDisable;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userLogin = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };

    const { data: token } = await callEndpoint(loginService(userLogin));
    const { data: payload } = await callEndpoint(validateTokenService(token));

    dispatch(login({ ...token, ...payload }));
  };

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        ref={emailRef}
        placeholder="Correo electrónico"
        fa="envelope"
        required
        onChange={handleChange}
        pattern={PATTERNS.EMAIL.exp}
        title={PATTERNS.EMAIL.title}
      />
      <InputForm
        ref={passRef}
        placeholder="Contraseña"
        fa="lock"
        type="password"
        required
        onChange={handleChange}
      />
      <Btn
        ref={btnRef}
        label="Iniciar sesión"
        btn="outline"
        className="btn-block"
        type="submit"
        disabled
      />
    </form>
  );
};