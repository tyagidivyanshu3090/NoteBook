import axios from "axios";
import store from "../store";
import SEHLOService from "../services/SE-HLO-Service/SEHLOService";
import { setCredentials, clearCredentials } from "../store/Auth/Reducer";

const API = axios.create({
  baseURL: "http://localhost:7779",
});

API.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const jwtToken = state.jwtAuthentication.jwt;

    // console.log("JWT Token in interceptor:", jwtToken);

    if (jwtToken) {
      config.headers["Authorization"] = "Bearer " + jwtToken;
    }

    // console.log("Request Config:", config); // Log the request config
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const state = store.getState();
    const dispatch = store.dispatch;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const refreshToken = state.jwtAuthentication.refreshToken;

      if (refreshToken) {
        SEHLOService.getNewToken({ refreshToken })
          .then((response) => {
            const user = state.jwtAuthentication;

            const userCredentials = {
              username: user.username,
              refreshToken: response.data.refreshToken,
              jwt: response.data.accessToken,
            };

            dispatch(setCredentials(userCredentials));

            // Retry the original request with new token
            originalRequest.headers["Authorization"] =
              "Bearer " + response.data.accessToken;

            return axios(originalRequest);
          })
          .catch((error) => {
            dispatch(clearCredentials());
            window.location.href = "/";
          });
      } else {
        dispatch(clearCredentials());

        //   showAlert({
        //     messageTitle: 'Session Expired',
        //     messageContent: 'Your session has expired. Please login again to continue working.',
        //     confirmText: 'Ok',
        //     onConfirm: () => {window.location.href = '/login';},
        //     enableHeaderCloseBtn: false,
        //     disableOutsideKeyDown: true
        // })
      }
    }

    return Promise.reject(error);
  }
);

export default API;
