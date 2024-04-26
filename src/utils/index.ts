import {
  clearUserInfo,
  getToken,
  getUserInfo,
  setUserInfo,
} from "@/utils/auth";
import request from "@/utils/request.ts";

const auth = {
  getToken,
  getUserInfo,
  setUserInfo,
  clearUserInfo,
};

export { auth, request };
