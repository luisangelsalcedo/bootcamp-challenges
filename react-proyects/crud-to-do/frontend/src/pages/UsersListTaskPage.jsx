import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAsync } from "../redux/actions/user.actions";
import { updateTaskAsync } from "./../redux/actions/task.actions";

export const UsersListTaskPage = React.memo(({ task }) => {
  const dispatch = useDispatch();

  const { token } = useSelector(state => state.auth);
  const { currentShow } = useSelector(state => state.board);

  const listaUserRef = useRef();
  const arrAssigned = useRef();
  const users = useRef();
  users.current = [...currentShow.guests, currentShow.owner];

  const handleChange = () => {
    arrAssigned.current = [];
    listaUserRef.current.childNodes.forEach(element => {
      let checkend = element.querySelector("input").checked;
      checkend && arrAssigned.current.push(element.querySelector("input").id);
    });

    const params = {
      task: {
        assigneds: arrAssigned.current,
      },
      taskID: task._id,
      token,
    };
    dispatch(updateTaskAsync(params));
  };

  useEffect(() => {
    !users.current.length && dispatch(getAllUsersAsync(token));
  }, []);

  return (
    <>
      <h3>SELECT ASIGNED USERS</h3>

      <div className="formInput">
        <div className="users-list" ref={listaUserRef}>
          {users.current.map(({ _id, name }) => (
            //
            <div className="users-list-item" key={_id}>
              <div>
                <input
                  id={_id}
                  type="checkbox"
                  onChange={handleChange}
                  defaultChecked={task.assigneds.join().indexOf(_id) !== -1}
                />
                <label htmlFor={_id}>
                  {name}
                  <i className="fa fa-check-circle" aria-hidden="true"></i>
                </label>
              </div>
            </div>
            //
          ))}
        </div>
      </div>
    </>
  );
});
