import React from "react";

export const Loader = React.memo(() => {
  return (
    <div className="loader">
      <div>
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        <span className="">Loading...</span>
      </div>
    </div>
  );
});
