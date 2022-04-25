import { useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  InputForm,
  Btn,
  Preloading,
  NotificationContext,
} from "../../components";
import { PATTERNS } from "../../constants";
import { useFetchAndLoad } from "../../hooks";
import { registerUserService } from "../../services";

export const RegisterForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const btnRef = useRef();
  const { loading, callEndpoint } = useFetchAndLoad();
  const navigate = useNavigate();
  const { openNotice } = useContext(NotificationContext);

  const handleChange = () => {
    emailRef.current.value = emailRef.current.value.trim();

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
      email: emailRef.current.value.trim().toLowerCase(),
      password: passRef.current.value,
    };
    // console.log(newUser);
    const { data } = await callEndpoint(registerUserService(newUser));
    const { user } = data;
    navigate("/login", { replace: true });
    await openNotice(`User ${user.name} created`);
    await openNotice(`Ready to login`);
  };

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <>
      {loading ? (
        <Preloading />
      ) : (
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
            label="Regístrate"
            btn="outline"
            className="btn-block"
            type="submit"
            disabled
          />
        </form>
      )}
    </>
  );
};
