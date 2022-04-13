import { ENDPOINTS } from "../constants";
import { axiosHTTPclient } from "../interceptors";
import { loadAbort } from "../utils/loadAbortAxios.utils";

export const loginService = (user) => {
  const controller = loadAbort();
  return {
    call: axiosHTTPclient.post(ENDPOINTS.LOGIN, user, {
      signal: controller.signal,
    }),
    controller,
  };
};

export const registerService = (user) => {
  const controller = loadAbort();
  return {
    call: axiosHTTPclient.post(ENDPOINTS.REGISTER, user, {
      signal: controller.signal,
    }),
    controller,
  };
};

export const validateTokenService = ({ token }) => {
  const controller = loadAbort();
  return {
    call: axiosHTTPclient.get(`${ENDPOINTS.VALIDATE}${token}`, {
      signal: controller.signal,
    }),
    controller,
  };
};
