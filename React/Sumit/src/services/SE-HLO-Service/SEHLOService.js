import API from '../../api/SEApplicationAPI';
import { encrypt } from '../../components/utils/EncryptDecrypt';
import store from '../../store';

const SE_HLO_SERVICE = "/se-enumeration-service";

const authenticate = (userlogin) => {
  return API.post(SE_HLO_SERVICE + "/se-authentication", userlogin);
};

const validateOTP = (mobileNumber, otp) => {
  return API.post(SE_HLO_SERVICE + "/verify-otp", { mobileNumber, otp });
};

const getNewToken = (refreshToken) => {
  return API.post(SE_HLO_SERVICE + "/refresh-token", refreshToken);
};

const resendLoginOTP = (username) => {
  return API.get(SE_HLO_SERVICE + "/get-new-login-otp", {
    params: {
      qid: encrypt(username),
    },
  });
};

const getDetails = () => {
  const state = store.getState();
  const username = state.jwtAuthentication.username;
  const encryptedUsername = encrypt(username);

  return API.get(SE_HLO_SERVICE + "/user-locationes/" + encryptedUsername);
};

const getLicenseDetailsByUsername = () => {
  const state = store.getState();
  const username = state.jwtAuthentication.username;
  const encryptedUsername = encrypt(username);
  return API.get(SE_HLO_SERVICE + "/user-details/" + encryptedUsername);
};


const saveLocation = (LocationDetails) => {
  console.log("Payload to be sent:", LocationDetails);
  return API.post(SE_HLO_SERVICE+"/user-location/add", LocationDetails);
};

export default {
  authenticate,
  validateOTP,
  getNewToken,
  resendLoginOTP,
  getDetails,
  getLicenseDetailsByUsername,
  saveLocation,
};
