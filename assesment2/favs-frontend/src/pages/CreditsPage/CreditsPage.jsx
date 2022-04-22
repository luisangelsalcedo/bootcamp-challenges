import "./creditsPage.scss";
import avatarImg from "../../assets/img/avatar.jpg";
import { Btn, Avatar } from "../../components/DesignSystem";

export const CreditsPage = () => (
  <div className="credits-page bg-red">
    <Avatar img={avatarImg} size="10rem" />
    <span>Developed by</span>
    <br />
    <div>
      <Btn
        label="luisangelsalcedo"
        fa="github-alt"
        btn="outline"
        onClick={() =>
          window.open("https://github.com/luisangelsalcedo", "_blank")
        }
      />
    </div>
  </div>
);
