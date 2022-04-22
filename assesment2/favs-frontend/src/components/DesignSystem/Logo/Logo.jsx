import { ReactComponent as SVG } from "./svg/logo-favsapp.svg";
import "./scss/logo.scss";

export const Logo = ({ handler }) => (
  <button className="logo" type="button" onClick={handler}>
    <SVG />
  </button>
);
