import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { InputForm, Btn } from "../../components";
import { PATTERNS } from "../../constants";
import { useFetchAndLoad } from "../../hooks";
import { registerService } from "../../services";

export const RegisterForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const btnRef = useRef();
  const { callEndpoint } = useFetchAndLoad();
  const navigate = useNavigate();

  const handleChange = () => {
    const nameVal = nameRef.current.value.length;
    const emailVal = emailRef.current.value.length;
    const passVal = passRef.current.value.length;
    let isDisable = true;
    if (nameVal + emailVal + passVal) isDisable = false;
    btnRef.current.disabled = isDisable;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    // console.log(newUser);
    await callEndpoint(registerService(newUser));
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        ref={nameRef}
        placeholder="Nombre completo"
        fa="user"
        required
        onChange={handleChange}
      />
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
