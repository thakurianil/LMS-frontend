import { apiProcesser } from "../../helpers/axiosHelper";

const bookEP = "http://localhost:9003" + "/api/v1/books";

export const postNewBook = async (obj) => {
  const axiosObj = {
    method: "post",
    url: bookEP,
    data: obj,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};

export const fetchBooks = async (isPrivate) => {
  const axiosObj = {
    method: "get",
    url: isPrivate ? bookEP + "/all" : bookEP,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};
export const fetchSingleBook = async (_id) => {
  const axiosObj = {
    method: "get",
    url: bookEP + "/" + _id,
  };
  return apiProcesser(axiosObj);
};

export const updateABook = async (obj) => {
  const axiosObj = {
    method: "put",
    url: bookEP,
    data: obj,
    isPrivate: true,
  };
  return apiProcesser(axiosObj);
};
