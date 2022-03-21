import React from "react";
import { Card } from "./Card";

export const BoardList = React.memo(({ arr }) => {
  return (
    <div className="boards-list">
      {!arr.length
        ? "0 boards"
        : arr.map(board => <Card key={board._id} content={board} />)}
    </div>
  );
});
