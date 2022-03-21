import React from "react";
import { useSelector } from "react-redux";

export const Avatar = () => {
  const { name, imageUrl } = useSelector(state => state.auth);

  return (
    <div className="avatar">
      <div className="circle">
        {!imageUrl ? [...name][0] : <img src={imageUrl} alt={name} />}
      </div>
      <div className="name">{name}</div>
    </div>
  );
};
