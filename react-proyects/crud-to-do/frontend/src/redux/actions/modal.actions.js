import { actions } from "../../constants";

export const showModal = config => ({
  type: actions.SHOW_MODAL,
  payload: config,
});

export const hideModal = () => ({
  type: actions.HIDE_MODAL,
});

export const cleanDataModal = () => ({
  type: actions.CLEAN_ALL,
});
