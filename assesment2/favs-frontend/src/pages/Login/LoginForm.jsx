import { useEffect, useRef } from "react";
import { InputForm, Btn } from "../../components";
import { PATTERNS } from "../../constants";

export const LoginForm = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const btnRef = useRef();

  const handleChange = () => {
    const emailVal = emailRef.current.value.length;
    const passVal = passRef.current.value.length;
    let isDisable = true;
    if (emailVal + passVal) isDisable = false;
    btnRef.current.disabled = isDisable;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userLogin = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    console.log(userLogin);
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
