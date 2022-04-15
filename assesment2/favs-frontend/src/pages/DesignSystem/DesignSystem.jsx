/* eslint-disable jsx-a11y/label-has-associated-control */

import {
  Btn,
  Logo,
  InputForm,
  FavItem,
  FavList,
  TitleField,
  ToggleMode,
} from "../../components";

import { ReactComponent as Img1 } from "../../assets/svg/ilustracion1.svg";
import { ReactComponent as Img2 } from "../../assets/svg/ilustracion2.svg";

export const DesignSystem = () => (
  <div className="ds">
    <div className="light">
      <TitleField text="Light mode" center />
      <TitleField text="Light mode" />

      <Logo />

      <ToggleMode />

      <Btn fa="plus" />
      <Btn label="button" />
      <Btn label="button" fa="plus" />

      <Btn fa="plus" btn="default" />
      <Btn label="button" btn="default" />
      <Btn label="button" fa="plus" btn="default" />

      <Btn fa="envelope" btn="outline" />
      <Btn label="button" btn="outline" />
      <Btn label="button" fa="envelope" btn="outline" />
      <Btn label="button" fa="envelope" btn="outline" className="btn-block" />

      <InputForm placeholder="Input form" />
      <InputForm placeholder="Input form" fa="user" />
    </div>
    <div className="red">
      <FavList />
      <FavList />
    </div>
    <div className="grey">
      <FavItem />
      <FavItem fa="star" />

      <div style={{ display: "flex", marginBottom: 20 }}>
        <Img1 width="50%" height="200" />
        <Img2 width="50%" height="200" />
      </div>
    </div>
    <div className="dark">
      <TitleField text="Dark mode" center />
      <TitleField text="Dark mode" />

      <Logo />

      <ToggleMode active />

      <Btn fa="plus" />
      <Btn label="button" />
      <Btn label="button" fa="plus" />

      <Btn fa="plus" btn="default" />
      <Btn label="button" btn="default" />
      <Btn label="button" fa="plus" btn="default" />

      <Btn fa="envelope" btn="outline" />
      <Btn label="button" btn="outline" />
      <Btn label="button" fa="envelope" btn="outline" />
      <Btn label="button" fa="envelope" btn="outline" className="btn-block" />

      <InputForm placeholder="Input form" />
      <InputForm placeholder="Input form" fa="user" />

      <FavList />
      <FavList />

      <FavItem />
      <FavItem fa="star" />

      <div style={{ display: "flex", marginBottom: 20 }}>
        <Img1 width="50%" height="200" />
        <Img2 width="50%" height="200" />
      </div>
    </div>
  </div>
);
