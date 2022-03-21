import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAsync } from "../redux/actions/user.actions";
import { updateBoardAsync } from "./../redux/actions/board.actions";
import { Loader } from "./../components/Loader";

export const UsersListBoardPage = React.memo(({ board }) => {
  const { token } = useSelector(state => state.auth);
  const { users } = useSelector(state => state.user);

  const dispatch = useDispatch();
  const listaUserRef = useRef();
  const arrGuest = useRef();

  const handleChange = () => {
    arrGuest.current = [];
    listaUserRef.current.childNodes.forEach(element => {
      let checkend = element.querySelector("input").checked;
      checkend && arrGuest.current.push(element.querySelector("input").id);
    });
    const params = {
      token,
      boardID: board._id,
      board: {
        guests: arrGuest.current,
      },
    };
    dispatch(updateBoardAsync(params));
  };

  useEffect(() => {
    !users.length && dispatch(getAllUsersAsync(token));
  }, []);

  return (
    <>
      <h3>SELECT GUEST USERS</h3>

      <div className="formInput">
        <div className="users-list" ref={listaUserRef}>
          {!users.length ? (
            <Loader />
          ) : (
            <>
              {users.map(({ _id, name }) => (
                //
                <div className="users-list-item" key={_id}>
                  <div className={_id === board.owner ? "hiden" : ""}>
                    <input
                      id={_id}
                      type="checkbox"
                      onChange={handleChange}
                      defaultChecked={board.guests.join().indexOf(_id) !== -1}
                    />
                    <label htmlFor={_id}>
                      {name}
                      <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </label>
                  </div>
                </div>
                //
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
});
