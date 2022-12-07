import { axios } from "@/utils/request";
const api = {
  Login: "v1/user/login",
};
export function Login(parameter) {
  return axios({
    url: api.Login,
    method: "post",
    data: parameter,
  });
}
