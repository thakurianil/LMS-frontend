import { apiProcesser } from "../../helpers/axiosHelper";

const rootURL = "http://localhost:9003";
const userEP = rootURL + "/api/v1/users";

export const postNewUser = async (obj) => {
  const axiosObj = {
    method: "post",
    url: userEP,
    data: obj,
  };
  return apiProcesser(axiosObj);
};

export const loginUser = async (obj) => {
  const axiosObj = {
    method: "post",
    url: userEP + "/login",
    data: obj,
  };

  return apiProcesser(axiosObj);
};
